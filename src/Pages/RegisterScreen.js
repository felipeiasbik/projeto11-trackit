import styled from "styled-components";
import LogoLoginRegister from "../Components/LogoLoginRegister";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL } from "../Components/Constants/URL";
import axios from "axios";

export default function RegisterScreen(){

    const [emailInput,setEmailInput] = useState("");
    const [passInput,setPassInput] = useState("");
    const [namelInput,setNameInput] = useState("");
    const [pictureInput,setPictureInput] = useState("");
    const navigate = useNavigate();

    function registerUser(e){
        e.preventDefault();

        const body = {
            email: emailInput,
            name: passInput,
            image: pictureInput,
            password: namelInput
        };

        axios.post(`${URL}/auth/sign-up`, body)
            .then(res => {
                console.log(res);
                navigate("/hoje");
                alert("Deu certo");
            })
            .catch(err => {
                console.log(body);
                console.log(err.response);
                alert("Deu erro");
            });
    }

    return (
        <Container>
            <ContainerInt>
                <LogoLoginRegister />
                <form onSubmit={registerUser}>
                    <input type="email" placeholder="email" value={emailInput} onChange={e => setEmailInput(e.target.value)} required/>
                    <input type="password" placeholder="senha" value={passInput} onChange={e => setPassInput(e.target.value)} required/>
                    <input type="text" placeholder="nome" value={namelInput} onChange={e => setNameInput(e.target.value)} required/>
                    <input type="text" placeholder="foto" value={pictureInput} onChange={e => setPictureInput(e.target.value)} required/>
                    <button>Cadastrar</button>
                    <p>Já tem uma conta? Faça login!</p>
                </form>
            </ContainerInt>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    position: fixed;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ContainerInt = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    top: 68px;
    p {
        margin-top: 25px;
        color: #52B6FF;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        text-decoration: underline;
    }
    form {
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 6px;
    }
`