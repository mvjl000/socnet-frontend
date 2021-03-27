import styled from 'styled-components';
import { EditButton } from 'views/Profile/Profile.styles';

interface EditPostButtonProps {
  cancelVariant?: boolean
}

export const Wrapper = styled.div`
  position: relative;
  margin: 50px 0;
  width: 90%;
  max-width: 1050px;
  min-height: 300px;
  background-color: rgb(253, 253, 253);
  border: 2px solid #ddd;
  border-radius: 10px;

  &::before {
    content: '';
    position: absolute;
    top: 80px;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: #ddd;
  }
`;

export const PostOptions = styled.button`
  position: absolute;
  top: 27px;
  right: 27px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  svg {
    color: #444;
    transform: scale(1.5);
  }
`;

export const ProfilePhoto = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  width: 50px;
  height: 50px;
  background-color: #f73f52;
  border-radius: 50%;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0 0 85px;
  width: calc(100% - 85px);
  height: 50px;
  padding-right: 56px;

  h2 {
    font-size: 20px;
    font-weight: 300;
    text-align: left;
    span {
      font-weight: 600;
    }
  }
`;

export const PostContent = styled.p`
  margin: 25px 15px 60px;
  font-size: 21px;
  color: #333;
  @media (min-width: 1024px) {
    margin: 35px 30px 60px;
  }
`;

export const PostDate = styled.p`
  position: absolute;
  left: 15px;
  font-size: 16px;
  color: #aaa;
  @media (min-width: 1024px) {
    left: 30px;
  }
`;

export const ReactionsContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 7px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 50px;
  width: 100%;
  padding: 0 10px;
  @media (min-width: 1024px) {
    padding: 0 80px;
  }

  svg {
    margin: 0 20px;
    color: #666;
    transform: scale(1.5);
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      color: #65def1;
    }
    @media (min-width: 1024px) {
      margin: 0 35px;
    }
  }
`;

export const EditPostButton = styled(EditButton)<EditPostButtonProps>`
  margin: 10px 1px;
  transform: none;
  background-color: ${({ cancelVariant }) => cancelVariant ? '#fff' : '#ccc'};
  border: ${({ cancelVariant }) => cancelVariant ? '1px solid #444' : 'none'};
  @media (min-width: 1024px) {
    margin: 10px 20px;
  }
`;

export const EditField = styled.textarea`
  margin: 25px 10px;
  width: 90%;
  height: 45%;
  color: #333;
  font-family: inherit;
  font-size: 21px;
  color: #444;
  border: none;
  outline: none;
  resize: none;
  @media (min-width: 1024px) {
    margin: 35px 30px 60px;
  }
`;
