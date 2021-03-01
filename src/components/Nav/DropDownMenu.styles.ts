import styled from 'styled-components';

interface DropDownProps {
  isDropDownOpen: boolean;
}

export const DropDownContainer = styled.aside`
  position: fixed;
  top: ${({ isDropDownOpen }: DropDownProps) =>
    isDropDownOpen ? '0' : '-100%'};
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 4;
  transition: 0.5s;
  overflow: hidden;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const DropDownContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30%;
  background-color: #564256;
`;

export const BlurArea = styled.div`
  width: 100%;
  height: 70%;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: ${({ isDropDownOpen }: DropDownProps) =>
    isDropDownOpen ? '1' : '0'};
  transition: opacity 0.7s 0.5s;
`;
