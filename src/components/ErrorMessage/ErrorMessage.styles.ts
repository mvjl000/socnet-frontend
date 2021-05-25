import styled, { keyframes } from 'styled-components';

const shrinkAnimation = keyframes`
    from {
        transform: translateX(-50%) scaleX(1);
    }
    to {
        transform: translateX(-50%) scaleX(0);
    }
`;

const slideAnimation = keyframes`
    from {
        transform: translateX(-50%) translateY(-500%);
    }
    to {
        transform: translateX(-50%) translateX(0);
    }
`;

export const Wrapper = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 13%;
  background-color: #fff;
  padding: 25px 25px 15px;
  color: #ff8383;
  border: 3px solid #ff8383;
  border-radius: 15px;
  animation: ${slideAnimation} 1s ease-in-out 1 forwards,
    ${slideAnimation} 1s 6s ease-in-out reverse forwards;
  h1 {
    color: #ff8383;
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 15px;
    transform: translateX(-50%);
    background-color: #ff8383;
    width: 60px;
    height: 5px;
    border-radius: 50px;
  }

  &::before {
    opacity: 0.5;
  }

  &::after {
    transform: translateX(-50%) scaleX(1);
    transform-origin: left top;
    animation: ${shrinkAnimation} 5s 1s linear 1 forwards;
  }
`;
