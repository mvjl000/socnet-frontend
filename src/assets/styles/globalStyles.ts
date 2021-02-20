import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600&display=swap');

    //font-family: 'Rubik', sans-serif;

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Rubik', sans-serif;
    }

    a, button, label {
        font-family: 'Rubik', sans-serif;
    }

    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
    outline: none;
}
`;
