import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
    *{
        margin:0;
        padding:0;
        box-sizing :border-box;
        font-family: 'Poppins', sans-serif;
    }
`;

export default GlobalStyle;