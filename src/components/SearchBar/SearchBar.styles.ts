import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface SearchBarProps {
  isListActive: boolean;
}

interface ListItemProps {
  isLastItem?: boolean;
}

export const Wrapper = styled.div`
  position: relative;
`;

export const Input = styled.input<SearchBarProps>`
  width: 180px;
  height: 30px;
  padding: 1px 5px;
  background-color: #fff;
  border: 1px solid #999;
  border-radius: ${({ isListActive }) =>
    isListActive ? '5px 5px 0 0' : '5px'};
  text-align: center;

  @media (min-width: 1024px) {
    width: 220px;
    height: 35px;
    padding: 1px 20px;
    text-align-last: left;
  }
  @media (min-width: 1400px) {
    width: 320px;
  }
`;

export const ResultsContainer = styled.ul<SearchBarProps>`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  border: ${({ isListActive }) => (isListActive ? '1px solid #999' : 'none')};
  border-top: none;
  border-radius: ${({ isListActive }) =>
    isListActive ? '0 0 5px 5px' : '5px'};
  background-color: #fff;
  list-style: none;
  z-index: 1;
`;

export const ListItem = styled(Link)<ListItemProps>`
  color: #000 !important;
  text-decoration: none !important;
  width: 80% !important;
  border-top: 1px solid #ccc !important;
  padding: 5px 0 !important;
  ${({ isLastItem }) =>
    isLastItem && 'text-align: center; letter-spacing: 1px'};

  &:nth-child(1) {
    border-top: none !important;
  }

  @media (min-width: 1024px) {
    width: 87% !important;
  }
`;
