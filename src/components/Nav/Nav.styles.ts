import styled from 'styled-components';

interface StyledNavProps {
  biggerNav: boolean;
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
