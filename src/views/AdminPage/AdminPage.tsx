import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AuthContext from 'shared/context/auth-context';
import { ReportsContext } from 'shared/context/reportsProvider';
import { Wrapper, PostsWrapper, Heading, Subheading } from './AdminPage.styles';
import Loader from 'shared/components/Loader';
import Post from 'components/Post/Post';

const AdminPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const auth = useContext(AuthContext);
  const { posts, setFetchedPosts } = useContext(ReportsContext);

  useEffect(() => {
    const reqData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/posts/reportedPosts`,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        setIsLoading(false);
        setFetchedPosts(data.posts);
      } catch (err) {
        console.log(err);
      }
    };
    reqData();
  }, [auth.token, setFetchedPosts]);

  return (
    <Wrapper>
      <Heading>Reported Posts</Heading>
      <PostsWrapper>
        {!isLoading ? (
          posts.length < 1 ? (
            <Subheading>There isn't any reported posts ( ͡o ͜ʖ ͡o)</Subheading>
          ) : (
            posts.map((post) => (
              <Post
                key={post._id}
                post={post}
                isCreatorShown={true}
                isPostLikedByUser={false}
              />
            ))
          )
        ) : null}
      </PostsWrapper>
      {isLoading && <Loader />}
    </Wrapper>
  );
};

export default AdminPage;
