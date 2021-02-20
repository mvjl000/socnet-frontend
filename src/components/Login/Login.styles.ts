import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 75%;
  height: 350px;
  border: 1px solid #f73f52;

  label {
    margin: 20px 0;
  }

  input {
    margin-left: 10px;
    width: 100px;
    background-color: transparent;
    border: 1px solid #f73f52;
  }
`;
