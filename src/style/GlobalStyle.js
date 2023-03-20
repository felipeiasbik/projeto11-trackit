import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    background-color: #F2F2F2;
}

input {
    width: 100%;
    height: 45px;
    background-color: #ffffff;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    box-sizing: border-box;
    color: #666666;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    padding: 10px;
    ::placeholder{
        color: #DBDBDB;
    }
    &:focus {
        outline: none;
    }
}

a {
    text-decoration: none;
}

`

export default GlobalStyle;