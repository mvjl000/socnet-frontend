import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 150px);
  background-color: transparent;
`;

export const Heading = styled.h1`
  font-size: 32px;
  font-weight: 600;
  text-align: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  max-width: 1200px;
  min-height: 300px;
  height: 60vh;

  label {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    font-size: 18px;
    font-weight: 300;
    @media (min-width: 1024px) {
      width: 300px;
      font-size: 22px;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #333;
      @media (min-width: 1024px) {
        bottom: -5px;
      }
    }
  }

  input {
    width: 100%;
    font-weight: 300;
    border: none;
    outline: none;
    @media (min-width: 1024px) {
      font-size: 18px;
    }
  }
`;

export const TextAreaContainer = styled.div`
  position: relative;

  p {
    position: absolute;
    top: -7px;
    left: 25px;
    background-color: #fff;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    line-height: 0.9;
    z-index: 1;
    @media (min-width: 1024px) {
      font-size: 22px;
      top: -10px;
    }
  }

  textarea {
    padding: 50px;
    position: relative;
    display: block;
    width: 60vw;
    height: 150px;
    padding: 10px;
    border: 2px solid #333;
    border-radius: 10px;
    outline: none;
    resize: none;
    @media (min-width: 1024px) {
      width: 800px;
      height: 250px;
      font-size: 18px;
      padding: 15px;
    }
  }
`;
