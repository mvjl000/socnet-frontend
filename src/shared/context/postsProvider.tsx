import React, { createContext, useCallback, useState } from 'react';
import { PostType } from 'types/posts-types';

interface PostsContextProps {
  posts: PostType[];
  setFetchedPosts: (posts: PostType[]) => void;
  handleAddPost: (postObj: PostType) => void;
  handleDeletePostFromContext: (postId: string) => void;
}

export const PostsContext = createContext<PostsContextProps>({
  posts: [],
  setFetchedPosts: () => {},
  handleAddPost: () => {},
  handleDeletePostFromContext: () => {},
});

const PostsProvider: React.FC = ({ children }) => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const handleAddPost = (postObj: PostType) => setPosts([postObj, ...posts]);

  const setFetchedPosts = useCallback(
    (posts: PostType[]) => setPosts(posts),
    []
  );

  const handleDeletePostFromContext = (postId: string) => {
    const newPosts = posts.filter((post) => post._id !== postId);
    setPosts([...newPosts]);
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        setFetchedPosts,
        handleAddPost,
        handleDeletePostFromContext,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
