import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.ul)`
  position: absolute;
  top: 15px;
  right: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 60%;
  height: 50px;
  background-color: rgb(253, 253, 253);
  list-style: none;
  @media (min-width: 1024px) {
    right: 75px;
  }
`;

export const ListItem = styled.li`
  margin: 0 8px;
  padding: 2px;
  font-size: 18px;
  border-radius: 5px;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
  @media (min-width: 1024px) {
    margin: 0 20px;
    font-size: 20px;
  }
`;
