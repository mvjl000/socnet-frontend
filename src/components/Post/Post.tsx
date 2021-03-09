import React from 'react';
import { Title, Wrapper, ProfilePhoto } from './Post.styles';

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
      {/* <p>{content}</p> */}
    </Wrapper>
  );
};

export default Post;
