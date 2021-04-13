import styled from 'styled-components';

export const Wrapper = styled.footer`
    position: fixed;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    height: 100px;
    width: 250px;
    background-color: rgba(247, 63, 82, 0.7);
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 15px;
    p {
        color: #fff;
        margin-bottom: 10px;
        font-size: 14px;
        text-align: center;
    }
`;