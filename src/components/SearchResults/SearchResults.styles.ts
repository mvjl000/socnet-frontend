import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 25px 0;
  padding: 0 30px;
  width: 80%;
  max-width: 500px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #aaa;
  border-radius: 10px;
  cursor: pointer;
  div {
    margin-right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #444;
  }
`;
