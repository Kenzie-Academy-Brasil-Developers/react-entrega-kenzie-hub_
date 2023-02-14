import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html,body,header,ul,li,img,p,h1,h2,h3,nav,div,a, section {
    
    list-style: none;
    /* color: #2D2D2D; */
    font-size: 16px;
    text-decoration: none;
    outline: none;
    border: none;
    
}
*{
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`;
