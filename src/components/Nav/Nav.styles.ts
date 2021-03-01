import styled from 'styled-components';

interface StyledNavProps {
  biggerNav: boolean;
}

interface BurgerButtonProps {
  isBurgerActive: boolean;
}

export const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: ${({ biggerNav }: StyledNavProps) => (biggerNav ? '100px' : '70px')};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background-color: #fff;
  z-index: 2;
  transition: height 0.3s;

  img {
    width: ${({ biggerNav }: StyledNavProps) =>
      biggerNav ? '250px' : '200px'};
    transition: width 0.3s;
    @media (min-width: 1024px) {
      width: ${({ biggerNav }: StyledNavProps) =>
        biggerNav ? '300px' : '220px'};
    }
  }
`;

export const DesktopNavLinksContainer = styled.div`
  width: 50%;
  max-width: 600px;
`;

export const BurgerContainer = styled.div`
  position: fixed;
  top: ${({ biggerNav }: StyledNavProps) => (biggerNav ? '35px' : '20px')};
  right: 30px;
  z-index: 5;
  transition: 0.3s;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const BurgerButton = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  height: 28px;
  width: 40px;
  cursor: pointer;

  span {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: ${({ isBurgerActive }: BurgerButtonProps) =>
      isBurgerActive ? '75%' : '100%'};
    height: 4px;
    background-color: ${({ isBurgerActive }: BurgerButtonProps) =>
      isBurgerActive ? '#fff' : '#222'};
    transition: 0.2s ease;
    transition: background-color 0.3s 0.1s;
  }

  &::before,
  &::after {
    display: block;
    content: '';
    position: absolute;
    transform: translateY(-50%);
    height: 4px;
    background-color: ${({ isBurgerActive }: BurgerButtonProps) =>
      isBurgerActive ? '#fff' : '#222'};
    transition: 0.2s ease;
    transition: background-color 0.3s 0.1s;
  }

  &::before {
    top: 0;
    right: 0;
    width: ${({ isBurgerActive }: BurgerButtonProps) =>
      isBurgerActive ? '50%' : '100%'};
  }

  &::after {
    top: 100%;
    right: 0;
    width: 100%;
  }
`;
