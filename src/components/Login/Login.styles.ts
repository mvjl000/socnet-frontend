import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 75%;
  max-width: 600px;
  height: 350px;
  border: 1px solid transparent;
  border-radius: 10px;
  box-shadow: 0 0 15px 1px rgba(247, 63, 82, 0.5);
  @media (orientation: portrait) {
    transform: translateY(-75px);
  }
  @media (min-width: 1024px) {
    transform: translateY(-75px);
  }

  label {
    margin: 20px 0;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #222;
  }

  input {
    margin-left: 10px;
    height: 100%;
    width: 100px;
    padding: 0 5px;
    background-color: transparent;
    border: 1px solid #f73f52;
    border-radius: 5px;
  }
`;

export const Button = styled.button`
  height: 30px;
  padding: 3px 20px;
  background-color: transparent;
  font-size: 16px;
  font-weight: 200;
  border-radius: 5px;
  border: 1px solid rgba(247, 63, 82, 0.5);
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #f73f52;
    color: white;
  }
`;
