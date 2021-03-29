import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: #fff;
    }

    a, button, label, textarea {
        font-family: 'Poppins', sans-serif;
    }

    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
    outline: none;
}
`;
