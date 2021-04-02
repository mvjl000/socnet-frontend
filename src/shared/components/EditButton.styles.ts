import styled from 'styled-components';

interface EditPostButtonProps {
  cancelVariant?: boolean;
};

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

export const EditPostButton = styled(EditButton)<EditPostButtonProps>`
  margin: 10px 1px;
  transform: none;
  background-color: ${({ cancelVariant }) => cancelVariant ? '#fff' : '#ccc'};
  border: ${({ cancelVariant }) => cancelVariant ? '1px solid #444' : 'none'};
  @media (min-width: 1024px) {
    margin: 10px 20px;
  }
`;