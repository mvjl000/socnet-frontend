import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1300px;
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
