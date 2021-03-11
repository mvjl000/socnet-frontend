import React from 'react';
import {
  Title,
  Wrapper,
  ProfilePhoto,
  PostContent,
  ReactionsContainer,
} from './Post.styles';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

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
  return (
    <Wrapper>
      <ProfilePhoto />
      <Title>
        {isCreatorShown && <span>{creator}</span>}
        {isCreatorShown && ' - '}
        {title}
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
