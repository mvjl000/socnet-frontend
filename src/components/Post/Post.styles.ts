import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin: 50px 0;
  width: 90%;
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
  font-size: 22px;
  font-weight: 500;
  text-align: left;
`;

export const PostContent = styled.p`
  margin: 40px 10px;
  font-size: 21px;
  color: #333;
  @media (min-width: 1024px) {
    margin: 50px 30px;
  }
`;
