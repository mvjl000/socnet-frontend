import React, { useCallback, useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useError } from 'hooks/useError';
import { deletePost, editPost, likePost } from 'store/actions/postsActions';
import { likePost as likeCommentPagePost } from 'store/actions/commentsActions';
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
import AuthContext from 'context/auth-context';
import { PostProps } from 'types/posts-types';

const Post: React.FC<PostProps> = ({
  post: {
    title,
    content,
    creatorName,
    creatorId,
    creatorImage,
    _id,
    creationDate,
    edited,
    likesCount,
    commentsCount,
  },
  isCreatorShown,
  isPostLikedByUser,
}) => {
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [contentData, setContentData] = useState<string>(content);
  const auth = useContext(AuthContext);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const history = useHistory();
  const { dispatchError } = useError();

  const handleDeletePost = async () => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/posts/deletePost/${_id}`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      dispatch(deletePost(_id));
      if (pathname.split('/')[1] === 'post') {
        history.push('/');
      }
    } catch (error) {
      dispatchError(error.response.data.message);
    }
  };

  const openEditMode = () => {
    setAreOptionsVisible(false);
    setIsEditMode(true);
  };

  const closeEditMode = () => {
    setIsEditMode(false);
    setContentData(content);
  };

  const closeOptions = useCallback(() => setAreOptionsVisible(false), []);

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContentData(event.target.value);

  const handleEditPost = async () => {
    const responseData = await axios.patch(
      `${process.env.REACT_APP_BACKEND_URL}/posts/editPost/${_id}`,
      { content: contentData },
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );
    dispatch(editPost(_id, responseData.data.content));
    setIsEditMode(false);
  };

  const handleLikeAction = async () => {
    if (!isPostLikedByUser) {
      // LIKE
      try {
        await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/posts/likeAction`,
          { actionType: 'LIKE', postId: _id },
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        if (pathname.split('/')[1] === 'post') {
          dispatch(likeCommentPagePost(_id, auth.userData![0], 'LIKE'));
        } else {
          dispatch(likePost(_id, auth.userData![0], 'LIKE'));
        }
      } catch (error) {
        dispatchError(error.response.data.message);
      }
    } else {
      // DISLIKE
      try {
        await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/posts/likeAction`,
          { actionType: 'DISLIKE', postId: _id },
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        if (pathname.split('/')[1] === 'post') {
          dispatch(likeCommentPagePost(_id, auth.userData![0], 'DISLIKE'));
        } else {
          dispatch(likePost(_id, auth.userData![0], 'DISLIKE'));
        }
      } catch (error) {
        dispatchError(error.response.data.message);
      }
    }
  };

  return (
    <Wrapper>
      {areOptionsVisible && (
        <PostOptionsList
          handleDeletePost={handleDeletePost}
          openEditMode={openEditMode}
          closeOptions={closeOptions}
          postId={_id}
          postCreatorId={creatorId}
        />
      )}
      <PostOptions onClick={() => setAreOptionsVisible(!areOptionsVisible)}>
        <MoreVertIcon />
      </PostOptions>
      <ProfilePhoto
        src={`${process.env.REACT_APP_ASSETS_URL}/${creatorImage}`}
      />
      <Title>
        <h2>
          {isCreatorShown && (
            <Link to={`/profile/${creatorName}`}>
              <span>{creatorName}</span>
            </Link>
          )}{' '}
          {title}
        </h2>
      </Title>
      {isEditMode ? (
        <EditField value={contentData} onChange={handleContentChange} />
      ) : (
        <PostContent>{content}</PostContent>
      )}
      <ReactionsContainer>
        {edited && <EditedInfo>-Post edited-</EditedInfo>}
        <PostDate>{creationDate}</PostDate>
        {isEditMode ? (
          <>
            <EditPostButton cancelVariant onClick={closeEditMode}>
              Cancel
            </EditPostButton>
            <EditPostButton onClick={handleEditPost}>Confirm</EditPostButton>
          </>
        ) : (
          <>
            {pathname.split('/')[1] !== 'admin' && (
              <>
                <LikeIcon
                  isPostLikedByUser={isPostLikedByUser}
                  onClick={handleLikeAction}
                />
                {likesCount}
              </>
            )}
            <Link to={`/post/${_id}`}>
              <CommentIcon />
            </Link>
            {commentsCount}
          </>
        )}
      </ReactionsContainer>
    </Wrapper>
  );
};

export default Post;
