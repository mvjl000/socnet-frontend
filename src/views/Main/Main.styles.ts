import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 206px);
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
