import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

*{
    box-sizing: border-box;
}

html, body{
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Pretendard-Regular';
}

ol, ul, li{
    list-style: none;
}

a{
    text-decoration: none;
    color: black;
}
a:visited{
    color: black;
}

button{
    cursor: pointer;
}

`;

export default GlobalStyle;
