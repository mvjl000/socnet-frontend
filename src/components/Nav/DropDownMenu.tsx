import React from 'react';
import ReactDOM from 'react-dom';

import {
  DropDownContainer,
  DropDownContent,
  BlurArea,
} from './DropDownMenu.styles';

interface DropDownProps {
  isDropDownOpen: boolean;
  closeDropDown: () => void;
}

const DropDownMenu: React.FC<DropDownProps> = ({
  children,
  isDropDownOpen,
  closeDropDown,
}) => {
  const content = (
    <DropDownContainer isDropDownOpen={isDropDownOpen}>
      <DropDownContent>{children}</DropDownContent>
      <BlurArea isDropDownOpen={isDropDownOpen} onClick={closeDropDown} />
    </DropDownContainer>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById('dropDownMenu-hook')!
  );
};

export default DropDownMenu;
