import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
`;

export const PostsWrapper = styled.div`
    margin: 0 auto;
    width: 90%;
    display: grid;
    grid-template-columns: 1fr;
    @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    }
`;

export const Heading = styled.h1`
    font-size: 36px;
    font-weight: 400;
    text-align: center;
`;

export const Subheading = styled.h2`
    margin: 100px 0;
    font-size: 26px;
    font-weight: 400;
    text-align: center;
    @media (min-width: 1024px) {
        transform: translateX(50%);
    }
`;