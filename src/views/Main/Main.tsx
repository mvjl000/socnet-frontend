import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { PostsContext } from 'shared/context/postsProvider';
import Post from 'components/Post/Post';
import { Wrapper, Heading } from './Main.styles';

const Main: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { posts, setFetchedPosts } = useContext(PostsContext);

  useEffect(() => {
    const reqData = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/posts/getAllPosts`
      );
      setIsLoading(false);
      setFetchedPosts(response.data.posts.reverse());
    };
    reqData();
  }, [setFetchedPosts]);

  return (
    <>
      <Heading>See what's going on - all posts section</Heading>
      <Wrapper>
        {isLoading && <h2>Loading...</h2>}
        {posts &&
          posts.map((post, i) => (
            <Post
              key={i}
              title={post.title}
              content={post.content}
              creator={post.creatorName}
              isCreatorShown={true}
              postId={post._id}
            />
          ))}
      </Wrapper>
    </>
  );
};

export default Main;
