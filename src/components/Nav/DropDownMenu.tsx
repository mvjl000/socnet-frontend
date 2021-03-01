import React from 'react';
import ReactDOM from 'react-dom';

import { DropDownContainer } from './DropDownMenu.styles';

interface DropDownProps {
  isDropDownOpen: boolean;
}

const DropDownMenu: React.FC<DropDownProps> = ({
  children,
  isDropDownOpen,
}) => {
  const content = (
    <DropDownContainer isDropDownOpen={isDropDownOpen}>
      {children}
    </DropDownContainer>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById('dropDownMenu-hook')!
  );
};

export default DropDownMenu;
