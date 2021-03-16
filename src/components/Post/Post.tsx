import React, { useContext, useState } from 'react';
import axios from 'axios';
import {
  Title,
  Wrapper,
  ProfilePhoto,
  PostContent,
  ReactionsContainer,
  PostOptions,
} from './Post.styles';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PostOptionsList from './PostOptionsList/PostOptionsList';
import AuthContext from 'shared/context/auth-context';

interface PostProps {
  title: string;
  content: string;
  creator: string;
  isCreatorShown: boolean;
  postId: string;
}

const Post: React.FC<PostProps> = ({
  title,
  content,
  creator,
  isCreatorShown,
  postId,
}) => {
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);
  const auth = useContext(AuthContext);

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
    } catch (error) {}
  };

  return (
    <Wrapper>
      {areOptionsVisible && (
        <PostOptionsList handleDeletePost={handleDeletePost} />
      )}
      <PostOptions onClick={() => setAreOptionsVisible(!areOptionsVisible)}>
        <MoreVertIcon />
      </PostOptions>
      <ProfilePhoto />
      <Title>
        {isCreatorShown && <span>{creator}</span>} {title}
      </Title>
      <PostContent>{content}</PostContent>
      <ReactionsContainer>
        <ThumbUpAltIcon />
        <ChatBubbleIcon />
      </ReactionsContainer>
    </Wrapper>
  );
};

export default Post;
