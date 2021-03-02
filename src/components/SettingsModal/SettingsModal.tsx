import React from 'react';
import {
  Wrapper,
  Content,
  CloseIconContainer,
  Heading,
  OptionsList,
  Option,
} from './SettingsModal.styles';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';

interface SettingsModalProps {
  closeModal: (close: boolean) => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ closeModal }) => {
  return (
    <Wrapper>
      <Content>
        <CloseIconContainer>
          <CloseIcon onClick={() => closeModal(false)} />
        </CloseIconContainer>
        <Heading>Account Settings</Heading>
        <OptionsList>
          <Option>
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
      </Content>
    </Wrapper>
  );
};

export default SettingsModal;
