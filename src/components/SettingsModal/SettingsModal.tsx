import React, { useState } from 'react';
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
    <Wrapper>
      <Content>
        <CloseIconContainer>
          <CloseIcon onClick={() => closeModal(false)} />
        </CloseIconContainer>
        <Heading>Account Settings</Heading>
        {!isConfirmOpen && (
          <OptionsList>
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
          <>
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
          </>
        )}
      </Content>
    </Wrapper>
  );
};

export default SettingsModal;
