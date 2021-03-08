import React from 'react';
import { Title, Wrapper } from './Post.styles';

interface PostProps {
  title: string;
  content: string;
  creator: string;
}

const Post: React.FC<PostProps> = ({ title, content, creator }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default Post;
