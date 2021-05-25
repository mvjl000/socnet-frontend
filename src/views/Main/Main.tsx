import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/reducers/rootReducer';
import { PostsStateTypes } from 'store/reducers/postsReducer';
import AuthContext from 'context/auth-context';
import Post from 'components/Post/Post';
import Loader from 'shared/components/Loader';
import AboutButton from 'shared/components/AboutButton';
import { Wrapper, Heading } from './Main.styles';
import { setFetchedPosts } from 'store/actions/postsActions';

interface MainPageProps {
  testsUrl?: string;
}

const Main: React.FC<MainPageProps> = ({ testsUrl }) => {
  const posts = useSelector<RootState, PostsStateTypes['posts']>(
    (state) => state.posts.posts
  );
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const auth = useContext(AuthContext);
  const APIUrl =
    testsUrl || `${process.env.REACT_APP_BACKEND_URL}/posts/getAllPosts`;

  useEffect(() => {
    const reqData = async () => {
      setIsLoading(true);
      const response = await axios.get(APIUrl);
      setIsLoading(false);
      dispatch(setFetchedPosts(response.data.posts));
    };
    reqData();
  }, [dispatch]);

  return (
    <>
      <AboutButton />
      <Heading>See what's going on - all posts section</Heading>
      <Wrapper>
        {posts &&
          posts.map((post, i) => {
            const isPostLikedByLoggedUser = post.likedBy.find(
              (userId) => userId === auth.userData![0]
            );
            return (
              <Post
                key={post._id}
                post={post}
                isCreatorShown={true}
                isPostLikedByUser={!!isPostLikedByLoggedUser}
              />
            );
          })}
        {isLoading && <Loader />}
      </Wrapper>
    </>
  );
};

export default Main;
