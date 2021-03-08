import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  min-height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const Heading = styled.h1`
  font-size: 28px;
  font-weight: 300;
  text-align: center;

  span {
    font-weight: 600;
  }
`;

export const DescriptionWrapper = styled.div`
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
    transform: translate(30px, -25px);
    padding: 0 0px;
  }
  p {
    font-weight: 200;
  }
  textarea {
    width: 100%;
    height: 200px;
    border: none;
    outline: none;
    resize: none;
  }
`;

export const EditButton = styled.button`
  align-self: flex-end;
  margin: 15px 0;
  transform: translateX(-40px);
  width: 80px;
  height: 25px;
  border: none;
  background-color: #ccc;
  color: #444;
  border-radius: 20px;
  cursor: pointer;
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
  width: 75%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 2px solid #999;
  border-bottom: 2px solid #999;

  @media (min-width: 1024px) {
    width: 100%;
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
