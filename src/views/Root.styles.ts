import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 150px);
  background-color: #fff;
  @media (min-width: 1024px) {
    margin-top: 170px;
  }

  section {
    height: 100vh;
  }
`;
