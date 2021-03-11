import React from 'react';
import { Title, Wrapper, ProfilePhoto, PostContent } from './Post.styles';

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
      {isCreatorShown && creator}
      <Title>{title}</Title>
      <PostContent>{content}</PostContent>
    </Wrapper>
  );
};

export default Post;
