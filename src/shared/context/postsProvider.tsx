import React, { createContext, useCallback, useState } from 'react';
import { PostType } from 'types/posts-types';

interface PostsContextProps {
  posts: PostType[];
  setFetchedPosts: (posts: PostType[]) => void;
  handleAddPost: (postObj: PostType) => void;
  handleDeletePostFromContext: (postId: string) => void;
  handleDeleteUserPosts: (userId: string) => void;
  handleEditPostFromContext: (postId: string, content: string) => void;
  handleLikeActionContext: (postId: string, userId: string, actionType: "LIKE" | "DISLIKE") => void;
}

export const PostsContext = createContext<PostsContextProps>({
  posts: [],
  setFetchedPosts: () => {},
  handleAddPost: () => {},
  handleDeletePostFromContext: () => {},
  handleDeleteUserPosts: () => {},
  handleEditPostFromContext: () => {},
  handleLikeActionContext: () => {},
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

  const handleDeleteUserPosts = (userId: string) => {
    const newPosts = posts.filter((post) => post.creatorId !== userId);
    setPosts([...newPosts]);
  }

  const handleEditPostFromContext = (postId: string, content: string) => {
    const newPosts = posts.map(post => {
      if (post._id === postId) {
        return {
          ...post,
          content: content,
          edited: true
        }
      }
      return post;
    })
    setPosts([...newPosts]);
  };

  const handleLikeActionContext = (postId: string, userId: string, actionType: "LIKE" | "DISLIKE") => {
    if (actionType === "LIKE") {
      const newPosts = posts.map(post => {
        if (post._id === postId) {
          return {
            ...post,
            likesCount: post.likesCount + 1,
            likedBy: [...post.likedBy, userId]
          }
        }
        return post;
      });
      setPosts([...newPosts]);
    } else {
      const newPosts = posts.map(post => {
        const newLikeUsersList = post.likedBy.filter(uid => uid !== userId);
        if (post._id === postId) {
          return {
            ...post,
            likesCount: post.likesCount - 1,
            likedBy: [...newLikeUsersList],
          }
        }
        return post;
      });
      setPosts([...newPosts]);
    }
  }

  return (
    <PostsContext.Provider
      value={{
        posts,
        setFetchedPosts,
        handleAddPost,
        handleDeletePostFromContext,
        handleDeleteUserPosts,
        handleEditPostFromContext,
        handleLikeActionContext
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
