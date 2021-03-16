import React, { useState, useContext } from 'react';
import {
  Wrapper,
  Heading,
  StyledForm,
  TextAreaContainer,
} from './AddPost.styles';
import { AddPostButton } from 'shared/components/AddPostButton';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AuthContext from 'shared/context/auth-context';

interface NewPost {
  title: string;
  description: string;
}

const initialNewPostObj: NewPost = {
  title: '',
  description: '',
};

const AddPost: React.FC = () => {
  const [newPostContent, setNewPostContent] = useState<NewPost>(
    initialNewPostObj
  );
  const auth = useContext(AuthContext);
  const history = useHistory();

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
      axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/posts/createPost`,
        {
          title: newPostContent.title,
          content: newPostContent.description,
          creator: auth.userData![1],
        },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      history.push('/');
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
