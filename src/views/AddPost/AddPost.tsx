import React, { useState } from 'react';
import {
  Wrapper,
  Heading,
  StyledForm,
  TextAreaContainer,
} from './AddPost.styles';
import { AddPostButton } from 'shared/components/AddPostButton';
import axios from 'axios';

interface NewPost {
  title: string;
  description: string;
}

const AddPost: React.FC = () => {
  const [newPostContent, setNewPostContent] = useState<NewPost>({
    title: '',
    description: '',
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setNewPostContent({
      ...newPostContent,
      [event.target.name]: event.target.value,
    });

  const handleAddNewPost = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      newPostContent.title.length < 100 &&
      newPostContent.description.length > 3 &&
      newPostContent.description.length < 2000
    ) {
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/newPost`, {
        title: newPostContent.title,
        description: newPostContent.description,
      });
    }
  };

  return (
    <Wrapper>
      <Heading>New Post</Heading>
      <StyledForm onSubmit={handleAddNewPost}>
        <label htmlFor=''>
          Title{' '}
          <input
            placeholder='This is optional*'
            type='text'
            name='title'
            value={newPostContent.title}
            onChange={handleInputChange}
          />
        </label>
        <TextAreaContainer>
          <p>Content</p>
          <textarea
            name='description'
            value={newPostContent.description}
            onChange={handleInputChange}
          ></textarea>
        </TextAreaContainer>
        <AddPostButton>Add Post</AddPostButton>
      </StyledForm>
    </Wrapper>
  );
};

export default AddPost;
