import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const Heading = styled.h1`
  font-size: 28px;
  font-weight: 300;
  text-align: center;

  span {
    font-weight: 600;
  }
`;

export const DescriptionWrapper = styled.div`
  width: 75%;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  h2 {
    font-size: 25px;
    margin: 10px 0;
    align-self: flex-start;
    font-weight: 400;
  }
  p {
    font-weight: 200;
  }
  textarea {
    width: 600px;
  }
`;

export const EditButton = styled.button`
  align-self: flex-end;
  margin: 15px 0;
  transform: translateX(-40px);
  width: 80px;
  height: 25px;
  border: none;
  background-color: #ccc;
  color: #444;
  border-radius: 20px;
  cursor: pointer;
`;
