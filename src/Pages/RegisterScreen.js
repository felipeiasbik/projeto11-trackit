import styled from "styled-components";
import LogoLoginRegister from "../Components/LogoLoginRegister";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL_base } from "../Components/Constants/URL_base";
import axios from "axios";
import Loading from "../Components/Constants/Loading";

export default function RegisterScreen(){

    const [emailInput,setEmailInput] = useState("");
    const [passInput,setPassInput] = useState("");
    const [namelInput,setNameInput] = useState("");
    const [pictureInput,setPictureInput] = useState("");
    const [activeDisabled,setActiveDisabled] = useState(false);
    const navigate = useNavigate();

    function registerUser(e){
        e.preventDefault();
        setActiveDisabled(true);

        const body = {
            email: emailInput,
            name: passInput,
            image: pictureInput,
            password: namelInput
        };

        axios.post(`${URL_base}/auth/sign-up1`, body)
            .then(res => {
                console.log(res);
                navigate("/");
                alert("Deu certo");
            })
            .catch(err => {
                setActiveDisabled(false);
                console.log(body);
                console.log(err.response);
                alert(`Erro ${err.response.status} - ${err.response.data.details !== undefined ? err.response.data.details : err.response.data}`);
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
                    <button disabled={activeDisabled}>
                        {activeDisabled === true ? <Loading /> : "Cadastrar"}
                    </button>
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
