import styled from 'styled-components';

interface StyledInputProps {
  expand?: boolean;
};

interface ProfilePhotoContainerProps {
  isActive: boolean
}

export const Wrapper = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 75%;
  max-width: 600px;
  height: 380px;
  border: 1px solid transparent;
  border-radius: 10px;
  box-shadow: 0 5px 22px -10px rgba(247, 63, 82, 0.6);
  @media (orientation: portrait) {
    transform: translateY(-75px);
  }
  @media (min-width: 1024px) {
    transform: translateY(-75px);
  }

  label {
    position: relative;
    margin: 20px 0;
    height: 30px;
    width: 240px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #222;
  }
`;

export const Header = styled.h1`
  margin-bottom: 15px;
  text-align: center;
  font-weight: 500;
`;

export const Input = styled.input`
  margin-left: 10px;
  height: 100%;
  width: 100px;
  padding: 0 5px;
  background-color: transparent;
  border: 1px solid #f73f52;
  border-radius: 5px;
  transition: 0.2s;

  &:focus {
    width: ${({ expand }: StyledInputProps) => (expand ? '100px' : '150px')};
  }
`;

export const Button = styled.button`
  height: 30px;
  padding: 3px 20px;
  background-color: transparent;
  font-size: 16px;
  font-weight: 400;
  border-radius: 5px;
  border: 1px solid rgba(247, 63, 82, 0.5);
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #f73f52;
    color: white;
  }
`;

export const CreateAccountButton = styled.button`
  margin-top: 5px;
  background-color: transparent;
  color: #222;
  border: none;
  cursor: pointer;
  transition: 0.15s;

  &::after {
    display: block;
    content: '';
    height: 1px;
    width: 100px;
    background-color: #f73f52;
  }
  &:hover {
    color: #f73f52;
  }
`;

export const ToggleVisibilityButton = styled.button`
  position: absolute;
  top: 3px;
  right: 5px;
  border: none;
  background-color: transparent;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  width: 250px;
  color: red;
  left: 50%;
  font-size: 13px;
  bottom: 10px;
  transform: translateX(-50%);
  text-align: center;

  @media (min-width: 1024px) {
    width: 400px;
    font-size: 16px;
  }
`;

export const PhotosWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const ProfilePhotoContainer = styled.div<ProfilePhotoContainerProps>`
  margin: 20px 20px 40px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  transition: .2s ease-out;
  border: ${({ isActive }) => isActive ? '4px solid white' : 'none'};
  box-shadow: ${({ isActive }) => isActive ? '0 0 0px 2px #f73f52' : 'none'};
  transform: ${({ isActive }) => isActive ? 'scale(1.15)' : 'none'};

  &:hover {
    transform: scale(1.15);
  }
`;

export const ProfilePhoto = styled.img`
  width: 100%;
  object-fit: fill;
`;