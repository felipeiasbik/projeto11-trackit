import { useContext } from "react";
import styled from "styled-components";
import MyContext from "../context/MyContext";

export default function Header(){

    const {loginOk} = useContext(MyContext);

    return (
        <Top>
            <h1>TrackIt</h1>
            <img src={loginOk.image} alt="Foto do Perfil do Usuário" />
        </Top>
    )
}

const Top = styled.div`
    width: 100%;
    height: 70px;
    box-sizing: border-box;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 18px;
    h1 {
        color: #ffffff;
        font-family: 'Playball', cursive;
        font-size: 39px;
        font-weight: 400;
        line-height: 48px;
    }
    img {
        width: 51px;
        height: 51px;
	    object-fit: cover;
        border-radius: 50%;
    }
`