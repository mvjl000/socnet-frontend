import React, { useContext } from 'react';
import AuthContext from 'shared/context/auth-context';
import {
  Wrapper,
  Heading,
  DescriptionWrapper,
  EditButton,
} from './Profile.styles';

const Profile: React.FC = () => {
  const auth = useContext(AuthContext);

  return (
    <main>
      <Heading>
        <span>{auth.userData![1]}</span> - this is your profile
      </Heading>
      <Wrapper>
        <DescriptionWrapper>
          <h2>description</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
            consequatur nemo magnam excepturi, repellendus id repudiandae minus.
            Maxime velit cumque, alias voluptas, aliquid quisquam ex eligendi
            iste, dignissimos at cum?
          </p>
          <EditButton>Edit</EditButton>
        </DescriptionWrapper>
      </Wrapper>
    </main>
  );
};

export default Profile;
