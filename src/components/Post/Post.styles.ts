import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin: 50px 0;
  width: 90%;
  max-width: 1050px;
  min-height: 300px;
  background-color: rgb(253, 253, 253);
  border: 2px solid #ddd;
  border-radius: 10px;

  &::before {
    content: '';
    position: absolute;
    top: 80px;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: #ddd;
  }
`;

export const PostOptions = styled.button`
  position: absolute;
  top: 27px;
  right: 27px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  svg {
    color: #444;
    transform: scale(1.5);
  }
`;

export const ProfilePhoto = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  width: 50px;
  height: 50px;
  background-color: #999;
  border-radius: 50%;
`;

export const Title = styled.h2`
  margin: 28px 0 15px 85px;
  width: calc(100% - 85px);
  height: 23px;
  padding-right: 56px;
  font-size: 20px;
  font-weight: 500;
  text-align: left;

  span {
    font-weight: 600;
  }
`;

export const PostContent = styled.p`
  margin: 40px 10px 60px;
  font-size: 21px;
  color: #333;
  @media (min-width: 1024px) {
    margin: 50px 30px 60px;
  }
`;

export const ReactionsContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 7px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 50px;
  width: 100%;
  padding: 0 10px;
  @media (min-width: 1024px) {
    padding: 0 80px;
  }

  svg {
    margin: 0 20px;
    color: #666;
    transform: scale(1.5);
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      color: #65def1;
    }
  }
`;
