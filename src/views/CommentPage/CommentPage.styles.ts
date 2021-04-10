import styled from 'styled-components';

interface CommentsWrapperProps {
    commentsExist: boolean;
};

interface CommentsProps {
    isLastComment: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const CommentsWrapper = styled.div<CommentsWrapperProps>`
    position: relative;
    margin-bottom: 80px;
    width: 80%;
    max-width: 1000px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;

    &::before {
        position: absolute;
        content: '';
        top: -50px;
        left: 0px;
        width: 2px;
        height: ${({ commentsExist }) => commentsExist ? '50px' : '0'};
        background-color: #bbb;
        @media (min-width: 1024px) {
            left: 0px;
        }
    }
`;

export const Comment = styled.div<CommentsProps>`
    position: relative;
    margin: 15px 0;
    padding: 5px 10px;
    width: 100%;
    min-height: 62px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    border: 1px solid #bbb;
    @media (min-width: 1024px) {
        width: 100%;
    }

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: -20px;
        transform: translateY(-50%);
        width: 20px;
        height: 2px;
        background-color: #bbb;
    }

    &::before {
        position: absolute;
        top: ${({ isLastComment }) => isLastComment ? 'calc(25% - 15px)' : 'calc(50% - 15px)'};
        left: -21px;
        transform: translateY(-50%);
        content: '';
        width: 2px;
        height: ${({ isLastComment }) => isLastComment ? 'calc(50% + 32px)' : 'calc(100% + 32px)'};
        background-color: #bbb;
    }
    `;

export const AddComment = styled.form`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 80px;

    &::after {
            content: '';
            display: block;
            position: absolute;
            bottom: 14px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #bbb;
            @media (min-width: 1024px) {
                width: 80%;
            }
        }

    & > input {
        padding: 0 20px;
        height: 50px;
        width: 100%;
        font-size: 16px;
        border: none;
        @media (min-width: 1024px) {
            width: 76%;
        }
    }

    & > button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        svg {
            width: 40px;
            height: 40px;
            color: #666;
        }
    }
`;

export const AuthorInfo = styled.div`
    margin: 5px 20px 5px 0;
    min-width: 60px;
    display: flex;
    align-items: center;
`;

export const ProfilePicture = styled.img`
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

export const CommentDate = styled.p`
    margin: 0 10px 0 auto;
    color: #aaa;
    font-size: 13px;
`;