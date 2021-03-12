import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AuthContext from 'shared/context/auth-context';
import Post from 'components/Post/Post';
import { PostType } from 'types/posts-types';
import { Wrapper, Heading } from './Main.styles';

const Main: React.FC = () => {
  const [fetchedPosts, setFetchedPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const auth = useContext(AuthContext);

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
  }, []);

  return (
    <>
      <Heading>See what's going on - all posts section</Heading>
      <Wrapper>
        {isLoading && <h2>Loading...</h2>}
        {fetchedPosts &&
          fetchedPosts.map((post, i) => (
            <Post
              key={i}
              title={post.title}
              content={post.content}
              creator={post.creator}
              isCreatorShown={true}
              postId={post._id}
            />
          ))}
      </Wrapper>
    </>
  );
};

export default Main;
