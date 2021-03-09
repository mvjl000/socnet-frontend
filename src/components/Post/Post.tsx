import React from 'react';
import { Title, Wrapper, ProfilePhoto, PostContent } from './Post.styles';

interface PostProps {
  title: string;
  content: string;
  creator: string;
}

const Post: React.FC<PostProps> = ({ title, content, creator }) => {
  return (
    <Wrapper>
      <ProfilePhoto />
      <Title>{title}</Title>
      <PostContent>{content}</PostContent>
    </Wrapper>
  );
};

export default Post;
