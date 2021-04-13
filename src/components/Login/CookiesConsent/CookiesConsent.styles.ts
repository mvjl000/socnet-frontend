import styled from 'styled-components';

export const Wrapper = styled.footer`
    padding: 0 10px;
    position: fixed;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    height: 110px;
    width: 270px;
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
        transform: translateX(8px);
    }
    button {
        width: 50px;
        height: 20px;
        background-color: transparent;
        border: none;
        color: white;
        transform: translateY(-180%);
        cursor: pointer;
    }
`;