import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { PostsContext } from 'shared/context/postsProvider';
import AuthContext from 'shared/context/auth-context';
import Post from 'components/Post/Post';
import Loader from 'shared/components/Loader';
import AboutButton from 'shared/components/AboutButton';
import { Wrapper, Heading } from './Main.styles';

const Main: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { posts, setFetchedPosts } = useContext(PostsContext);
  const auth = useContext(AuthContext);

  useEffect(() => {
    const reqData = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/posts/getAllPosts`
      );
      setIsLoading(false);
      setFetchedPosts(response.data.posts);
    };
    reqData();
  }, [setFetchedPosts]);

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
                key={i}
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
