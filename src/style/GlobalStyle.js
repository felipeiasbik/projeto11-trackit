import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #ffffff;
    }

    button {
        width: 100%;
        height: 45px;
        background-color: #52B6FF;
        border-radius: 5px;
        border: 0;
        color: #ffffff;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 21px;
        font-weight: 400;
        line-height: 26px;
        box-sizing: border-box;
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
`

export default GlobalStyle;