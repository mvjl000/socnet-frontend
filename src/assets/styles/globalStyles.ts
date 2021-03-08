import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background-color: #fff;
    }

    a, button, label {
        font-family: 'Montserrat', sans-serif;
    }

    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
    outline: none;
}
`;
