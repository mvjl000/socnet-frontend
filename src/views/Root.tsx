import React from 'react';
import { Wrapper } from './Root.styles';
import Logo from 'assets/images/socnet-logo.png';

const Root: React.FC = () => {
  return (
    <Wrapper>
      <img src={Logo} alt='logo' />
    </Wrapper>
  );
};

export default Root;
