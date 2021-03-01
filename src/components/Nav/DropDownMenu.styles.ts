import styled from 'styled-components';

interface DropDownProps {
  isDropDownOpen: boolean;
}

export const DropDownContainer = styled.aside`
  position: fixed;
  top: ${({ isDropDownOpen }: DropDownProps) =>
    isDropDownOpen ? '0' : '-500px'};
  left: 0;
  height: 30vh;
  max-height: 500px;
  width: 100%;
  background-color: #999;
  z-index: 4;
  transition: 0.5s;
`;
