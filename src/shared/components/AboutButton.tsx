import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    top: 115px;
    left: 30px;
`;

const Button = styled(Link)`
    color: #111;
`;

const AboutButton: React.FC = () => {
    return (
        <Wrapper>
            <Button to='/about'>About Socnet</Button>
        </Wrapper>
    )
}

export default AboutButton
