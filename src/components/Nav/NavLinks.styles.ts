import styled from 'styled-components';

const ulElement = {
  elementMixin: () => `
  color: #fff;
  font-weight: 600;
  transition: 0.2s;
  @media (min-width: 1024px) {
    color: #222;
  }
  &:hover {
    color: #65def1;
  }
    `,
};

export const StyledNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 50%;
  width: 50%;
  list-style: none;
  @media (min-width: 1024px) {
    flex-direction: row;
    width: 100%;
    li {
      font-size: 22px;
    }
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
    text-align: center;
    cursor: pointer;
    ${() => ulElement.elementMixin()}

    svg {
      margin-left: 10px;
    }

    a {
      text-decoration: none;
      ${() => ulElement.elementMixin()}

      svg {
        transform: translateY(4px);
      }
    }
  }
`;
