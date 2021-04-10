import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import {
  Title,
  Wrapper,
  ProfilePhoto,
  PostContent,
  ReactionsContainer,
  PostOptions,
  PostDate,
  EditPostButton,
  EditField,
  EditedInfo,
  LikeIcon,
  CommentIcon,
} from './Post.styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PostOptionsList from './PostOptionsList/PostOptionsList';
import AuthContext from 'shared/context/auth-context';
import { PostsContext } from 'shared/context/postsProvider';

interface PostProps {
  title: string;
  content: string;
  creator: string;
  creatorId: string;
  creatorImage: string;
  isCreatorShown: boolean;
  postId: string;
  creationDate: string;
  edited: boolean;
  likesCount: number;
  isPostLikedByUser: boolean;
  commentsCount: number;
}

const Post: React.FC<PostProps> = ({
  title,
  content,
  creator,
  creatorId,
  creatorImage,
  isCreatorShown,
  postId,
  creationDate,
  edited,
  likesCount,
  isPostLikedByUser,
  commentsCount
}) => {
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [contentData, setContentData] = useState<string>(content);
  const auth = useContext(AuthContext);
  const { handleDeletePostFromContext, handleEditPostFromContext, handleLikeActionContext } = useContext(PostsContext);
  const { pathname } = useLocation();
  const history = useHistory();  

  const handleDeletePost = async () => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/posts/deletePost/${postId}`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      handleDeletePostFromContext(postId);
      if (pathname.split('/')[1] === 'post') {
        history.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const openEditMode = () => {
    setAreOptionsVisible(false);
    setIsEditMode(true);
  };

  const closeEditMode = () => {
    setIsEditMode(false);
    setContentData(content);
  }

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setContentData(event.target.value);

  const handleEditPost = async () => {
    const responseData = await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/posts/editPost/${postId}`, { content: contentData }, { 
      headers: {
        Authorization: `Bearer ${auth.token}`,
      }, });
    handleEditPostFromContext(postId, responseData.data.content)
    setIsEditMode(false);
  };

  const handleLikeAction = async () => {
    if (!isPostLikedByUser) {
      // LIKE
      try {
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/posts/likeAction`, { actionType: "LIKE", postId }, { 
        headers: {
          Authorization: `Bearer ${auth.token}`,
        }, });
        handleLikeActionContext(postId, auth.userData![0], "LIKE");
      } catch (err) {
        console.log(err.response.data.message);
      }
    } else {
      // DISLIKE
      try {
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/posts/likeAction`, { actionType: "DISLIKE", postId }, { 
        headers: {
          Authorization: `Bearer ${auth.token}`,
        }, });
        handleLikeActionContext(postId, auth.userData![0], "DISLIKE");
      } catch (err) {
        console.log(err.response.data.message);
      }
    }
  };

  return (
    <Wrapper>
      {areOptionsVisible && (
        <PostOptionsList
          handleDeletePost={handleDeletePost}
          postCreatorId={creatorId}
          openEditMode={openEditMode}
        />
      )}
      <PostOptions onClick={() => setAreOptionsVisible(!areOptionsVisible)}>
        <MoreVertIcon />
      </PostOptions>
      <ProfilePhoto src={`${process.env.REACT_APP_ASSETS_URL}/${creatorImage}`} />
      <Title>
        <h2>
          {isCreatorShown && <span>{creator}</span>} {title}
        </h2>
      </Title>
      {isEditMode ? <EditField value={contentData} onChange={handleContentChange} /> : <PostContent>{content}</PostContent>}
      <ReactionsContainer>
        {edited && <EditedInfo>-Post edited-</EditedInfo>}
        <PostDate>{creationDate}</PostDate>
        {isEditMode ? (
        <>
          <EditPostButton cancelVariant onClick={closeEditMode}>Cancel</EditPostButton>
          <EditPostButton onClick={handleEditPost}>Confirm</EditPostButton>
        </> ) : (
        <>
          <LikeIcon isPostLikedByUser={isPostLikedByUser} onClick={handleLikeAction} />{likesCount}
          <Link to={`/post/${postId}`}><CommentIcon /></Link>{commentsCount}
        </>
        )}
      </ReactionsContainer>
    </Wrapper>
  );
};

export default Post;
