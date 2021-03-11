import React from 'react';
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
      <PostOptions>
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
