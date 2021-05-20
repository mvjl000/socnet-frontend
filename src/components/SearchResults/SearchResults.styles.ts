import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 25px auto;
  padding: 0 30px;
  width: 300px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #aaa;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    box-shadow: 0 0 19px -6px #aaa;
  }

  p {
    font-size: 18px;
  }
`;

export const ProfilePhoto = styled.img`
  margin-right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
