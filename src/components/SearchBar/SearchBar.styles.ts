import styled from 'styled-components';


export const Input = styled.input`
    width: 180px;
    height: 30px;
    padding: 1px 5px;
    background-color: #fff;
    border: 1px solid #999;
    border-radius: 5px;

    @media (min-width: 1024px) {
        width: 220px;
        height: 35px;
        padding: 1px 20px;
    }
    @media (min-width: 1400px) {
        width: 320px;
    }
`;