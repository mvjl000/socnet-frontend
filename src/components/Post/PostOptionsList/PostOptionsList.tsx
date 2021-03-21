import React, { useContext } from 'react';
import { Wrapper, ListItem } from './PostOptionsList.styles';
import AuthContext from 'shared/context/auth-context';

interface PostOptionsListProps {
  handleDeletePost: () => void;
  postCreatorId: string;
}

const PostOptionsList: React.FC<PostOptionsListProps> = ({
  handleDeletePost,
  postCreatorId,
}) => {
  const auth = useContext(AuthContext);

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <ListItem colorVariant='1'>Report</ListItem>
      {auth.userData![0] === postCreatorId && (
        <>
          <ListItem colorVariant='2'>Edit</ListItem>
          <ListItem onClick={handleDeletePost} colorVariant='3'>
            Delete
          </ListItem>
        </>
      )}
    </Wrapper>
  );
};

export default PostOptionsList;
