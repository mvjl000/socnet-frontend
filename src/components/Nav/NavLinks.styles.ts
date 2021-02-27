import styled from 'styled-components';

export const StyledNavLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  list-style: none;

  li {
    width: 80px;
    text-align: center;
    cursor: pointer;

    a {
      text-decoration: none;
      color: black;
    }
  }
`;
