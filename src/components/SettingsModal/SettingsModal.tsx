import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import AuthContext from 'shared/context/auth-context';
import { PostsContext } from 'shared/context/postsProvider';
import {
  Wrapper,
  Content,
  CloseIconContainer,
  Heading,
  OptionsList,
  Option,
  SubHeading,
  ButtonsContainer,
  ConfirmButton,
} from './SettingsModal.styles';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';

interface SettingsModalProps {
  closeModal: (close: boolean) => void;
  deleteUser: () => void;
  deletePosts: () => void;
};

type ConfirmStateProps = {
  isOpen: boolean,
  actionType: string
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  closeModal,
  deleteUser,
  deletePosts
}) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState<ConfirmStateProps>({ isOpen: false, actionType: ''});

  const auth = useContext(AuthContext);
  const { handleDeleteUserPosts } = useContext(PostsContext);

  const handleConfirmOpen = (action: string) => setIsConfirmOpen({isOpen: true, actionType: action});

  const handleDeleteAction = () => {
    if (isConfirmOpen.actionType === 'DELETE_ACCOUNT') {
      deleteUser();
    } else if (isConfirmOpen.actionType === 'DELETE_POSTS') {
      deletePosts();
      handleDeleteUserPosts(auth.userData![0]);
      setIsConfirmOpen({ isOpen: false, actionType: '' });
    }
  }

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Content>
        <CloseIconContainer>
          <CloseIcon onClick={() => closeModal(false)} />
        </CloseIconContainer>
        <Heading>Account Settings</Heading>
        {!isConfirmOpen.isOpen && (
          <OptionsList
            exit={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Option onClick={() => handleConfirmOpen('DELETE_ACCOUNT')}>
              <p>Delete account</p>
              <DeleteIcon />
            </Option>
            <Option>
              <p>Edit Name</p>
              <EditIcon />
            </Option>
            <Option onClick={() => handleConfirmOpen('DELETE_POSTS')}>
              <p>Delete all posts</p>
              <DeleteSweepIcon />
            </Option>
          </OptionsList>
        )}
        {isConfirmOpen.isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SubHeading>
              This operation is irreversible! Do you want to proceed?
            </SubHeading>
            <ButtonsContainer>
              <ConfirmButton onClick={() => setIsConfirmOpen({ isOpen: false, actionType: '' })}>
                Cancel
              </ConfirmButton>
              <ConfirmButton onClick={handleDeleteAction} deleteVersion={true}>
                Delete
              </ConfirmButton>
            </ButtonsContainer>
          </motion.div>
        )}
      </Content>
    </Wrapper>
  );
};

export default SettingsModal;
