import React, { createContext, useState, useCallback } from 'react';
import { PostType } from 'types/posts-types';

interface ReportsContextProps {
  posts: PostType[];
  setFetchedPosts: (posts: PostType[]) => void;
  handleDiscardReport: (postId: string) => void;
};

export const ReportsContext = createContext<ReportsContextProps>({
  posts: [],
  setFetchedPosts: () => {},
  handleDiscardReport: () => {}
});

const ReportsProvider: React.FC = ({ children }) => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const setFetchedPosts = useCallback(
    (posts: PostType[]) => setPosts(posts),
    []
  );

  const handleDiscardReport = (postId: string) => {
    const newPosts = posts.filter((post) => post._id !== postId);
    setPosts([...newPosts]);
  };

    return (
        <ReportsContext.Provider value={{ posts, setFetchedPosts, handleDiscardReport }}>
          {children}
        </ReportsContext.Provider>
    )
};

export default ReportsProvider;