import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import AuthContext from 'shared/context/auth-context';
import { PostsContext } from 'shared/context/postsProvider';
import {
  Wrapper,
  Heading,
  DescriptionWrapper,
  EditButton,
  AllPostsWrapper,
  SettingsIconContainer,
} from './Profile.styles';
import SettingsModal from 'components/SettingsModal/SettingsModal';
import Post from 'components/Post/Post';
import { AddPostButton } from 'shared/components/AddPostButton';
import SettingsIcon from '@material-ui/icons/Settings';

interface ParamsTypes {
  uname: string
}

const Profile: React.FC = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [userDescription, setUserDescripion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const auth = useContext(AuthContext);
  const { posts, setFetchedPosts } = useContext(PostsContext);

  const { uname } = useParams<ParamsTypes>();
  console.log(uname);

  useEffect(() => {
    const reqData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/user/getUserData/${uname}`
      );
      setUserDescripion(response.data.description);
    };
    reqData();
  }, [auth.userData]);

  useEffect(() => {
    const reqData = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/posts/getUserPosts/${uname}`
      );
      setIsLoading(false);
      setFetchedPosts(response.data.posts.reverse());
    };
    reqData();
  }, [auth.userData, setFetchedPosts]);

  const handleDescChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setUserDescripion(event.target.value);

  const handleDescEdit = async () => {
    await axios.patch(
      `${process.env.REACT_APP_BACKEND_URL}/user/updateDesc/${
        auth.userData![0]
      }`,
      { description: userDescription }
    );
    setIsEditMode(!isEditMode);
  };

  const handleDeleteUser = async () => {
    auth.logout();
    await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/user/delete/${auth.userData![0]}`
    );
  };

  return (
    <>
      <Heading>
        <span>{auth.userData![1]}</span> - this is your profile
      </Heading>
      {isLoading && <h2>Loading...</h2>}
      <Wrapper>
        <DescriptionWrapper>
          <h2>{isEditMode && 'edit '}description</h2>
          {isEditMode ? (
            <>
              <textarea
                value={userDescription}
                onChange={handleDescChange}
              ></textarea>
              <EditButton onClick={handleDescEdit}>Confirm</EditButton>
            </>
          ) : (
            <>
              <p>{userDescription}</p>
              <EditButton onClick={() => setIsEditMode(!isEditMode)}>
                Edit
              </EditButton>
            </>
          )}
        </DescriptionWrapper>
        <Link to='/new-post'>
          <AddPostButton>Add New Post</AddPostButton>
        </Link>
        <AllPostsWrapper>
          <h1>{auth.userData![1]}'s Posts</h1>
          {posts &&
            posts.map((post, i) => (
              <Post
                key={i}
                title={post.title}
                content={post.content}
                creator={post.creatorName}
                isCreatorShown={false}
                postId={post._id}
                creationDate={post.creationDate}
                creatorId={post.creatorId}
                edited={post.edited}
              />
            ))}
        </AllPostsWrapper>
        {isSettingsOpen && (
          <SettingsModal
            closeModal={setIsSettingsOpen}
            deleteUser={handleDeleteUser}
          />
        )}
        <SettingsIconContainer>
          <SettingsIcon onClick={() => setIsSettingsOpen(true)} />
        </SettingsIconContainer>
      </Wrapper>
    </>
  );
};

export default Profile;
