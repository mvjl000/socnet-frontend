import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  min-height: calc(100vh - 150px);
`;

export const Heading = styled.h1`
  padding: 0 40px;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 34px;
  }
`;
