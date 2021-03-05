import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  closeModal,
  deleteUser,
}) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

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
        {!isConfirmOpen && (
          <OptionsList
            exit={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Option onClick={() => setIsConfirmOpen(true)}>
              <p>Delete account</p>
              <DeleteIcon />
            </Option>
            <Option>
              <p>Edit Name</p>
              <EditIcon />
            </Option>
            <Option>
              <p>Delete all posts</p>
              <DeleteSweepIcon />
            </Option>
          </OptionsList>
        )}
        {isConfirmOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SubHeading>
              This operation is irreversible! Do you want to proceed?
            </SubHeading>
            <ButtonsContainer>
              <ConfirmButton onClick={() => setIsConfirmOpen(false)}>
                Cancel
              </ConfirmButton>
              <ConfirmButton onClick={() => deleteUser()} deleteVersion={true}>
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
