import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  max-width: 1200px;
  height: 450px;
  background-color: #fff;
  box-shadow: 0 0 25px -10px rgba(0, 0, 0, 0.8);
  @media (min-width: 1024px) {
    height: 500px;
  }
`;

export const CloseIconContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  @media (min-width: 1024px) {
    top: 35px;
    right: 35px;
    transform: scale(1.8);
  }
  svg {
    transform: scale(1.3);
    color: #333;
    cursor: pointer;
  }
`;

export const Heading = styled.h3`
  margin: 40px 0;
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 34px;
  }
`;

export const OptionsList = styled.ul`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  list-style: none;
`;

export const Option = styled.li`
  margin: 15px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 300px;
  padding: 10px 25px;
  text-align: center;
  cursor: pointer;
  border-top: 2px solid #666;
  @media (min-width: 1024px) {
    padding: 25px 50px;
  }

  &:first-child {
    margin-top: 0;
    border: none;
  }

  p {
    font-size: 20px;
    @media (min-width: 1024px) {
      font-size: 22px;
    }
  }

  svg {
    color: #333;
    transform: scale(1.2);
    transition: 0.2s;
  }

  &:nth-child(2) {
    &:hover svg {
      color: #65def1;
    }
  }

  &:hover svg {
    color: red;
  }
`;
