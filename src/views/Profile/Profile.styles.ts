import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  min-height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  
  @media (min-width: 1300px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const ProfileInfo = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  @media (min-width: 1300px) {
    width: 600px;
    position: fixed;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
    grid-column: 1 / 2;
  }
`;

export const Heading = styled.h1`
  padding: 0 10px;
  font-size: 28px;
  font-weight: 300;
  text-align: center;

  span {
    font-weight: 600;
  }
`;

export const ProfilePicture = styled.div`
margin: 10px 0 40px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  img {
  width: 100%;  
  }
`;

export const DescriptionWrapper = styled.div<{ isEditButtonVisible: boolean}>`
  margin: 50px 0;
  width: 75%;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 0 30px;
  border: 2px solid #999;
  border-radius: 20px;
  h2 {
    font-size: 25px;
    margin: 10px 0;
    align-self: flex-start;
    font-weight: 400;
    background-color: white;
    transform: translate(30px, -30px);
    padding: 0 0px;
  }
  p {
    font-weight: 300;
    margin-bottom: ${({ isEditButtonVisible }) => isEditButtonVisible ? '0' : '62px'};
  }
  textarea {
    width: 100%;
    height: 200px;
    font-family: 'Poppins', sans-serif;
    border: none;
    outline: none;
    resize: none;
  }
`;

export const EditWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DeleteButton = styled.button`
  margin: 15px 0;
  width: 80px;
  height: 38px;
  border: none;
  background-color: #666;
  color: #111;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #dd0000;
    color: #fff;
  }
`;

export const AllPostsWrapper = styled.div`
  margin: 50px 0 10px;
  position: relative;
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    width: 100%;
  };

  @media (min-width: 1300px) {
    min-height: 300px;
    grid-column: 2 / 3;
  }


  h1 {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    font-size: 25px;
    font-weight: 300;
    text-align: center;
    @media (min-width: 480px) {
      font-size: 32px;
    }
  }
`;

export const SettingsIconContainer = styled.div`
  svg {
    margin: 25px 0 15px;
    transform: scale(1.5);
    color: #555;
    cursor: pointer;
    transition: transform 0.3s, color 0.2s;
    @media (min-width: 1024px) {
      transform: scale(1.8);
    }
    &:hover {
      color: #333;
      transform: scale(1.8) rotate(45deg);
    }
  }
`;

export const FetchErrorInfo = styled.div`
  padding: 0 20px;

  h1 {
    font-size: 46px;
    font-weight: 600;
    color: red;
    text-align: center;
  };

  h2 {
    font-size: 30px;
    font-weight: 400;
    text-align: center;
  }
`;