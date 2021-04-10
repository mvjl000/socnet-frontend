import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useScreenInfo } from 'hooks/useScreenInfo';
import AuthContext from 'shared/context/auth-context';
import { PostsContext } from 'shared/context/postsProvider';
import {
  Wrapper,
  ProfileInfo,
  Heading,
  ProfilePicture,
  DescriptionWrapper,
  AllPostsWrapper,
  EditWrapper,
  SettingsIconContainer,
  FetchErrorInfo
} from './Profile.styles';
import { EditButton, EditPostButton } from 'shared/components/EditButton.styles';
import { ErrorMessage } from 'shared/components/reusable.styles'
import SettingsModal from 'components/SettingsModal/SettingsModal';
import Post from 'components/Post/Post';
import { AddPostButton } from 'shared/components/AddPostButton';
import SettingsIcon from '@material-ui/icons/Settings';

interface ParamsTypes {
  uname: string
};

const Profile: React.FC = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [userDescription, setUserDescripion] = useState('');
  const [userImage, setUserImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [reqError, setReqError] = useState('');
  const [fetchError, setFetchError] = useState('');
  const auth = useContext(AuthContext);
  const { posts, setFetchedPosts } = useContext(PostsContext);
  const { isDesktopMode } = useScreenInfo();

  const { uname } = useParams<ParamsTypes>();

  const isMyProfile = uname === auth.userData![1];    

  useEffect(() => {
    setFetchError('');
    const reqData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/user/getUserData/${uname}`
        );
        setUserDescripion(response.data.description);
        setUserImage(response.data.image);
      } catch (error) {
        setFetchError(`No user found for provided name - ${uname}`);
      }
    };
    reqData();
  }, [auth.userData, uname]);

  useEffect(() => {
    const reqData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/posts/getUserPosts/${uname}`
        );
        setIsLoading(false);
        setFetchedPosts(response.data.posts.reverse());
      } catch (error) {
        setFetchError(`No user found for provided name - ${uname}`);
      }
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
      try {
        await axios.patch(
          `${process.env.REACT_APP_BACKEND_URL}/user/updateDesc/${
            auth.userData![0]
          }`,
          { description: userDescription },
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
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
      `${process.env.REACT_APP_BACKEND_URL}/user/delete/${auth.userData![0]}`,
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );
  };

  const handleDeletePosts = async () => {
    await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/user/deletePosts/${auth.userData![0]}`,
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );
  };

  return (
    <>
    {!fetchError ? (
      <>
      <Wrapper>
        <ProfileInfo>
      <ProfilePicture>
      <img src={`${process.env.REACT_APP_ASSETS_URL}/${userImage}`} alt="Profile"/>
      </ProfilePicture>
      <Heading>
        <span>{uname}</span>
      </Heading>
      {isLoading && <h2>Loading...</h2>}
        <DescriptionWrapper isEditButtonVisible={isMyProfile}>
          <h2>{isEditMode && 'edit '}description</h2>
          {isEditMode ? (
            <>
              <textarea
                value={userDescription}
                onChange={handleDescChange}
              ></textarea>
              <EditWrapper>
                <EditPostButton cancelVariant onClick={() => setIsEditMode(false)}>Cancel</EditPostButton>
                <EditPostButton onClick={handleDescEdit}>Confirm</EditPostButton>
              </EditWrapper>
            </>
          ) : (
            <>
              <p>{userDescription}</p>
              {isMyProfile && <EditButton onClick={() => setIsEditMode(true)}>
                Edit
              </EditButton>}
            </>
          )}
          {reqError && <ErrorMessage>{reqError}</ErrorMessage>}
        </DescriptionWrapper>
        {isMyProfile && <Link to='/new-post'>
          <AddPostButton>Add New Post</AddPostButton>
        </Link>}
        {isMyProfile && isDesktopMode && (
          <SettingsIconContainer>
            <SettingsIcon onClick={() => setIsSettingsOpen(true)} />
          </SettingsIconContainer>
        )}
        </ProfileInfo>
        <AllPostsWrapper isDesktopMode={isDesktopMode}>
          <h1>{uname}'s Posts</h1>
          {posts.length > 0 ?
            posts.map((post, i) => {
              const isPostLikedByLoggedUser = post.likedBy.find(userId => userId === auth.userData![0]);

              return <Post
                key={i}
                title={post.title}
                content={post.content}
                creator={post.creatorName}
                creatorImage={post.creatorImage}
                isCreatorShown={false}
                postId={post._id}
                creationDate={post.creationDate}
                creatorId={post.creatorId}
                edited={post.edited}
                likesCount={post.likesCount}
                isPostLikedByUser={!!isPostLikedByLoggedUser}
                commentsCount={post.commentsCount}
              />
            }) : <Heading as='h2'>This user hasn't got any post yet</Heading>}
            {isMyProfile && !isDesktopMode && (
          <SettingsIconContainer>
            <SettingsIcon onClick={() => setIsSettingsOpen(true)} />
          </SettingsIconContainer>
        )}
        </AllPostsWrapper>
        {isSettingsOpen && (
          <SettingsModal
            closeModal={setIsSettingsOpen}
            deleteUser={handleDeleteUser}
            deletePosts={handleDeletePosts}
          />
        )}
      </Wrapper>
      </>
    ) : (
      <FetchErrorInfo>
        <h1>
          404
        </h1>
        <h2>
          {fetchError}
        </h2>
      </FetchErrorInfo>
    )}
    </>
  );
};

export default Profile;
