import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ListItemProps {
  colorVariant: '1' | '2' | '3';
}

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

export const ListItem = styled.li<ListItemProps>`
  margin: 0 8px;
  padding: 2px;
  font-size: 18px;
  border-radius: 5px;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: ${({ colorVariant }) =>
      colorVariant === '1' ? '#f66' : colorVariant === '2' ? '#ddd' : '#f11'};
    color: ${({ colorVariant }) => (colorVariant === '2' ? '#000' : '#fff')};
  }
  @media (min-width: 1024px) {
    margin: 0 20px;
    font-size: 20px;
  }
`;
