import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
`;

export const Heading = styled.h1`
    margin-bottom: 50px;
    font-size: 50px;
    font-weight: 400;
    text-align: center;
    @media (min-width: 1024px) {
        text-align: left;
        margin: 0 auto 50px auto;
        width: 90%;
    }
`;

export const ContentWrapper = styled.div`
    margin: auto;
    width: 90%;
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 30px;
    @media (min-width: 1024px) {
        grid-template-columns: 2fr 4fr 2fr;
    }
`;

export const Article = styled.article`
    margin: 50px 0;
    width: 80%;
    max-width: 600px;
    justify-self: center;
    &:nth-child(2) {
        @media (min-width: 1024px) {
            padding: 0 100px;
            border-left: 2px solid #ddd;
            border-right: 2px solid #ddd;
        }
    }
`;

export const Title = styled.h2`
    font-size: 28px;
    font-weight: 300;
    text-align: center;
`;

export const Content = styled.p`
    padding: 0 10px;
    color: #333;
    font-weight: 300;
    font-size: 19px;
    text-align: left;

    a {
        color: inherit;
        transition: .2s;
        &:hover {
            color: #ff4257;
        }
    }

    svg {
        color: #111;
        transform: translate(5px, 3px);
    }
`;