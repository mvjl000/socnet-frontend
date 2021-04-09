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
    margin-bottom: 80px;
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
    padding: 5px 10px;
    width: 100%;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
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
        font-size: 16px;
        font-weight: 500;
        border: 2px solid #666;
        border-radius: 50px;
    }

    svg {
        width: 50px;
        height: 50px;
        color: #666;
        transition: .2s;
        @media (min-width: 1300px) {
        margin-right: 11px;
        }
    }
    &:hover svg {
        color: #444;
    }
`;

export const AuthorInfo = styled.div`
    margin: 5px;
    margin-left: 0;
    min-width: 60px;
    display: flex;
    align-items: center;
`;

export const ProfilePicture = styled.div`
    width: 40px;
    height: 40px;
    background-color: #666;
    border-radius: 50%;
`;

export const CommentAuthor = styled.p`
    margin-left: 5px;
    font-weight: 500;
    font-size: 18px;
`;