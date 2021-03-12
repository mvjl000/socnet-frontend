import React from 'react';
import { Wrapper, ListItem } from './PostOptionsList.styles';

const PostOptionsList: React.FC = () => {
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <ListItem>Report</ListItem>
      <ListItem>Edit</ListItem>
      <ListItem>Delete</ListItem>
    </Wrapper>
  );
};

export default PostOptionsList;
