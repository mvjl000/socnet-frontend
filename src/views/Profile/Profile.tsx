import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import AuthContext from 'shared/context/auth-context';
import {
  Wrapper,
  Heading,
  DescriptionWrapper,
  EditButton,
  DeleteButton,
} from './Profile.styles';

const Profile: React.FC = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [userDescription, setUserDescripion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const auth = useContext(AuthContext);

  useEffect(() => {
    const reqData = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/user/getUserData/${
          auth.userData![0]
        }`
      );
      setIsLoading(false);
      setUserDescripion(response.data.description);
    };
    reqData();
  }, [auth.userData]);

  const handleDescChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setUserDescripion(event.target.value);

  const handleDescEdit = async () => {
    await axios.patch(
      `${process.env.REACT_APP_BACKEND_URL}/user/updateDesc/${
        auth.userData![0]
      }`,
      { description: userDescription }
    );
    setIsEditMode(!isEditMode);
  };

  const handleDeleteUser = async () => {
    auth.logout();
    await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/user/delete/${auth.userData![0]}`
    );
  };

  return (
    <main>
      <Heading>
        <span>{auth.userData![1]}</span> - this is your profile
      </Heading>
      {isLoading && <h2>Loading...</h2>}
      <Wrapper>
        <DescriptionWrapper>
          <h2>{isEditMode && 'edit '}description</h2>
          {isEditMode ? (
            <>
              <textarea
                value={userDescription}
                onChange={handleDescChange}
              ></textarea>
              <EditButton onClick={handleDescEdit}>Confirm</EditButton>
            </>
          ) : (
            <>
              <p>{userDescription}</p>
              <EditButton onClick={() => setIsEditMode(!isEditMode)}>
                Edit
              </EditButton>
            </>
          )}
        </DescriptionWrapper>
        <DeleteButton onClick={handleDeleteUser}>Delete account</DeleteButton>
      </Wrapper>
    </main>
  );
};

export default Profile;