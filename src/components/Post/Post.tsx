import React, { useState } from 'react';
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

interface PostProps {
  title: string;
  content: string;
  creator: string;
  isCreatorShown: boolean;
}

const Post: React.FC<PostProps> = ({
  title,
  content,
  creator,
  isCreatorShown,
}) => {
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);

  return (
    <Wrapper>
      {areOptionsVisible && <PostOptionsList />}
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
