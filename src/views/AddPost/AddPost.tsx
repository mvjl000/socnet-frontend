import React, { useState, useContext } from 'react';
import {
  Wrapper,
  Heading,
  StyledForm,
  TextAreaContainer,
} from './AddPost.styles';
import { ErrorMessage } from 'shared/components/reusable.styles'
import { AddPostButton } from 'shared/components/AddPostButton';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AuthContext from 'shared/context/auth-context';
import { PostsContext } from 'shared/context/postsProvider';

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
  const [reqError, setReqError] = useState('');
  const auth = useContext(AuthContext);
  const { handleAddPost } = useContext(PostsContext);
  const history = useHistory();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
      setNewPostContent({
        ...newPostContent,
        [event.target.name]: event.target.value,
      });
      if (reqError) {
      setReqError('');
    }
  }

  const handleAddNewPost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      newPostContent.title.length < 100 &&
      newPostContent.description.length > 3 &&
      newPostContent.description.length < 2000
    ) {
      try {
        const responseData = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/posts/createPost`,
          {
            title: newPostContent.title,
            content: newPostContent.description,
            creatorId: auth.userData![0],
            creator: auth.userData![1],
          },
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        const {
          title,
          content,
          creatorName,
          creatorImage,
          _id,
          creationDate,
          creatorId,
          edited,
          likesCount,
          likedBy,
          commentsCount
        } = responseData.data.post;
        handleAddPost({
          title,
          content,
          creatorName,
          creatorImage,
          _id,
          creationDate,
          creatorId,
          edited,
          likesCount,
          likedBy,
          commentsCount
        });
        history.push('/');
      } catch (err) {
        setReqError(err.response.data.message);
      }
    } else {
      setReqError('Post fields are too long, or too short.');
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
        {reqError && <ErrorMessage>{reqError}</ErrorMessage>}
        <AddPostButton>Add Post</AddPostButton>
      </StyledForm>
    </Wrapper>
  );
};

export default AddPost;
