import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Wrapper, ListItem } from './PostOptionsList.styles';
import AuthContext from 'shared/context/auth-context';

interface PostOptionsListProps {
  handleDeletePost: () => void;
  openEditMode: () => void;
  closeOptions: () => void;
  postId: string;
  postCreatorId: string;
}

const PostOptionsList: React.FC<PostOptionsListProps> = ({
  handleDeletePost,
  openEditMode,
  closeOptions,
  postId,
  postCreatorId,
}) => {
  const auth = useContext(AuthContext);
  const { pathname } = useLocation();
  
  const handleReportPost = async () => {
    try {
      closeOptions();
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/posts/post/report`, { postId }, { headers: {
          Authorization: `Bearer ${auth.token}`,
        }})
    } catch (err) {
      console.log(err);
    }
  };

  let properOptions;
  if (pathname.split('/')[1] === 'admin') {
    properOptions = (
      <>
        <ListItem colorVariant='1'>
          Discard Report
        </ListItem>
        <ListItem onClick={handleDeletePost} colorVariant='3'>
          Delete
        </ListItem>
      </>
    )      
  } else {
    properOptions = (
      <>
        {auth.userData![0] !== postCreatorId && <ListItem onClick={handleReportPost} colorVariant='1'>Report</ListItem>}
        {auth.userData![0] === postCreatorId && (
        <>
          <ListItem onClick={openEditMode} colorVariant='2'>Edit</ListItem>
          <ListItem onClick={handleDeletePost} colorVariant='3'>
            Delete
          </ListItem>
        </>
      )}
      </>
    )
  }

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {properOptions}
    </Wrapper>
  );
};

export default PostOptionsList;
