import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ConfirmButtonProps {
  deleteVersion?: boolean;
}

export const Wrapper = styled(motion.div)`
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
  overflow: hidden;
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
  margin: 40px 0 15px;
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 34px;
    margin-bottom: 30px;
  }
`;

export const SubHeading = styled.h4`
  margin: 15px 10px;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  @media (min-width: 1024px) {
    margin-top: 50px;
    font-size: 30px;
  }
`;

export const OptionsList = styled(motion.ul)`
  margin: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  list-style: none;
`;

export const Option = styled.li`
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 300px;
  padding: 15px 25px 0;
  text-align: center;
  cursor: pointer;
  border-top: 2px solid #666;
  @media (min-width: 1024px) {
    padding: 25px 50px;
    margin: 0;
  }

  &:first-child {
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

  &:hover svg {
    color: red;
  }
`;

export const ButtonsContainer = styled.div`
  margin: 50px;
  width: 75%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const ConfirmButton = styled.button<ConfirmButtonProps>`
  font-size: 18px;
  margin: 15px 60px;
  padding: 3px 15px;
  color: ${({ deleteVersion }) => (deleteVersion ? '#fff' : '#000')};
  background-color: ${({ deleteVersion }) =>
    deleteVersion ? 'red' : 'rgba(180, 180, 180, 0.2)'};
  border: none;
  cursor: pointer;
  transition: 0.2s;
  @media (min-width: 1024px) {
    font-size: 22px;
  }

  &:hover {
    background-color: ${({ deleteVersion }) =>
      deleteVersion ? '#ac0000' : 'rgba(180, 180, 180, 0.6)'};
  }
`;
