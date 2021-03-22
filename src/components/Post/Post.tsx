import React, { useContext, useState } from 'react';
import axios from 'axios';
import {
  Title,
  Wrapper,
  ProfilePhoto,
  PostContent,
  ReactionsContainer,
  PostOptions,
  PostDate,
} from './Post.styles';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PostOptionsList from './PostOptionsList/PostOptionsList';
import AuthContext from 'shared/context/auth-context';
import { PostsContext } from 'shared/context/postsProvider';

interface PostProps {
  title: string;
  content: string;
  creator: string;
  creatorId: string;
  isCreatorShown: boolean;
  postId: string;
  creationDate: string;
}

const Post: React.FC<PostProps> = ({
  title,
  content,
  creator,
  creatorId,
  isCreatorShown,
  postId,
  creationDate,
}) => {
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);
  const auth = useContext(AuthContext);
  const { handleDeletePostFromContext } = useContext(PostsContext);

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
    } catch (error) {}
  };

  return (
    <Wrapper>
      {areOptionsVisible && (
        <PostOptionsList
          handleDeletePost={handleDeletePost}
          postCreatorId={creatorId}
        />
      )}
      <PostOptions onClick={() => setAreOptionsVisible(!areOptionsVisible)}>
        <MoreVertIcon />
      </PostOptions>
      <ProfilePhoto />
      <Title>
        <h2>
          {isCreatorShown && <span>{creator}</span>} {title}
        </h2>
      </Title>
      <PostContent>{content}</PostContent>
      <ReactionsContainer>
        <PostDate>{creationDate}</PostDate>
        <ThumbUpAltIcon />
        <ChatBubbleIcon />
      </ReactionsContainer>
    </Wrapper>
  );
};

export default Post;
