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
  ErrorMessage
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
  const [reqError, setReqError] = useState('');
  const auth = useContext(AuthContext);
  const { posts, setFetchedPosts } = useContext(PostsContext);

  const { uname } = useParams<ParamsTypes>();

  const isMyProfile = uname === auth.userData![1];  

  useEffect(() => {
    const reqData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/user/getUserData/${uname}`
      );
      setUserDescripion(response.data.description);
    };
    reqData();
  }, [auth.userData, uname]);

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
  }, [auth.userData, setFetchedPosts, uname]);

  const handleDescChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserDescripion(event.target.value);
    if (reqError) {
      setReqError('');
    }
  };

  const handleDescEdit = async () => {
    if (userDescription.length < 1000) {
      let responseData;
      try {
        responseData = await axios.patch(
          `${process.env.REACT_APP_BACKEND_URL}/user/updateDesc/${
            auth.userData![0]
          }`,
          { description: userDescription }
        );
        setIsEditMode(!isEditMode);
      } catch (err) {
        setReqError(err.response.data.message);
      }
    } else {
      setReqError('Description needs to be between 1 and 1000 characters!');
    }
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
        <span>{uname}</span> - {isMyProfile ? 'this is your profile' : 'profile'}
      </Heading>
      {isLoading && <h2>Loading...</h2>}
      <Wrapper>
        <DescriptionWrapper isEditButtonVisible={isMyProfile}>
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
              {isMyProfile && <EditButton onClick={() => setIsEditMode(!isEditMode)}>
                Edit
              </EditButton>}
            </>
          )}
          {reqError && <ErrorMessage>{reqError}</ErrorMessage>}
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
