import React, { createContext, useCallback, useState } from 'react';
import { PostType } from 'types/posts-types';

interface PostsContextProps {
  posts: PostType[];
  setFetchedPosts: (posts: PostType[]) => void;
  handleAddPost: (postObj: PostType) => void;
}

export const PostsContext = createContext<PostsContextProps>({
  posts: [],
  setFetchedPosts: () => {},
  handleAddPost: () => {},
});

const PostsProvider: React.FC = ({ children }) => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const handleAddPost = (postObj: PostType) => setPosts([postObj, ...posts]);

  const setFetchedPosts = useCallback(
    (posts: PostType[]) => setPosts(posts),
    []
  );

  return (
    <PostsContext.Provider value={{ posts, setFetchedPosts, handleAddPost }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
