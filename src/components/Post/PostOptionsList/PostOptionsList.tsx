import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Wrapper, ListItem } from './PostOptionsList.styles';
import AuthContext from 'context/auth-context';
import { ReportsContext } from 'context/reportsProvider';

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
  const { handleDeleteReport } = useContext(ReportsContext);
  const { pathname } = useLocation();

  const handleReportPost = async () => {
    try {
      closeOptions();
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/posts/post/report`,
        { postId },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleDiscardReport = async () => {
    try {
      closeOptions();
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/posts/post/report`,
        { postId, discardReport: true },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      handleDeleteReport(postId);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteAsAdmin = (postId: string) => {
    handleDeletePost();
    handleDeleteReport(postId);
  };

  let properOptions;
  if (pathname.split('/')[1] === 'admin') {
    properOptions = (
      <>
        <ListItem onClick={handleDiscardReport} colorVariant="1">
          Discard Report
        </ListItem>
        <ListItem onClick={() => deleteAsAdmin(postId)} colorVariant="3">
          Delete
        </ListItem>
      </>
    );
  } else {
    properOptions = (
      <>
        {auth.userData![0] !== postCreatorId && (
          <ListItem onClick={handleReportPost} colorVariant="1">
            Report
          </ListItem>
        )}
        {auth.userData![0] === postCreatorId && (
          <>
            <ListItem onClick={openEditMode} colorVariant="2">
              Edit
            </ListItem>
            <ListItem onClick={handleDeletePost} colorVariant="3">
              Delete
            </ListItem>
          </>
        )}
      </>
    );
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
