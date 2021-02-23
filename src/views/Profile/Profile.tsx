import React, { useContext, useState } from 'react';
import AuthContext from 'shared/context/auth-context';
import {
  Wrapper,
  Heading,
  DescriptionWrapper,
  EditButton,
} from './Profile.styles';

const DUMMY_DESCRIPTION =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eiusconsequatur nemo magnam excepturi, repellendus id repudiandae minus.Maxime velit cumque, alias voluptas, aliquid quisquam ex eligendiiste, dignissimos at cum?';

const Profile: React.FC = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const auth = useContext(AuthContext);

  return (
    <main>
      <Heading>
        <span>{auth.userData![1]}</span> - this is your profile
      </Heading>
      <Wrapper>
        <DescriptionWrapper>
          <h2>{isEditMode && 'edit '}description</h2>
          {isEditMode ? (
            <>
              <textarea value={DUMMY_DESCRIPTION}></textarea>
              <EditButton onClick={() => setIsEditMode(!isEditMode)}>
                Confirm
              </EditButton>
            </>
          ) : (
            <>
              <p>{DUMMY_DESCRIPTION}</p>
              <EditButton onClick={() => setIsEditMode(!isEditMode)}>
                Edit
              </EditButton>
            </>
          )}
        </DescriptionWrapper>
      </Wrapper>
    </main>
  );
};

export default Profile;
