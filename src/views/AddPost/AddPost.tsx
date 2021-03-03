import React from 'react';
import {
  Wrapper,
  Heading,
  StyledForm,
  TextAreaContainer,
} from './AddPost.styles';
import { AddPostButton } from 'shared/components/AddPostButton';

const AddPost: React.FC = () => {
  return (
    <Wrapper>
      <Heading>New Post</Heading>
      <StyledForm>
        <label htmlFor=''>
          Title <input placeholder='This is optional*' type='text' />
        </label>
        <TextAreaContainer>
          <p>Content</p>
          <textarea></textarea>
        </TextAreaContainer>
        <AddPostButton>Add Post</AddPostButton>
      </StyledForm>
    </Wrapper>
  );
};

export default AddPost;