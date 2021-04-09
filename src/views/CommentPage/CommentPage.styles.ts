import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const CommentsWrapper = styled.div`
    width: 100%;
    max-width: 1050px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
`;

export const Comment = styled.div`
    margin: 15px 0;
    width: 100%;
    min-height: 50px;
    border: 1px solid #bbb;
`;

export const AddCommentButton = styled.button`
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #fff;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    @media (min-width: 1300px) {
        position: static;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 200px;
        height: 55px;
        padding-left: 1px;
        border: 2px solid #666;
        border-radius: 50px;
    }

    svg {
        width: 50px;
        height: 50px;
        color: #666;
        transition: .2s;
        @media (min-width: 1300px) {
        margin-right: 15px;
        }
    }
    &:hover svg {
        color: #444;
    }
`;