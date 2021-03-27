import React, { createContext, useCallback, useState } from 'react';
import { PostType } from 'types/posts-types';

interface PostsContextProps {
  posts: PostType[];
  setFetchedPosts: (posts: PostType[]) => void;
  handleAddPost: (postObj: PostType) => void;
  handleDeletePostFromContext: (postId: string) => void;
  handleEditPostFromContext: (postId: string, content: string) => void;
}

export const PostsContext = createContext<PostsContextProps>({
  posts: [],
  setFetchedPosts: () => {},
  handleAddPost: () => {},
  handleDeletePostFromContext: () => {},
  handleEditPostFromContext: () => {},
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

  const handleEditPostFromContext = (postId: string, content: string) => {
    const newPosts = posts.map(post => {
      if (post._id === postId) {
        return {
          ...post,
          content: content
        }
      }
      return post;
    })
    setPosts([...newPosts]);
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        setFetchedPosts,
        handleAddPost,
        handleDeletePostFromContext,
        handleEditPostFromContext
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
