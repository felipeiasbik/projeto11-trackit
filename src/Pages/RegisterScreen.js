import styled from "styled-components";
import LogoLoginRegister from "../Components/LogoLoginRegister";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL_base } from "../Constants/URL_base";
import axios from "axios";
import Loading from "../Constants/Loading";
import { Link } from "react-router-dom";

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
            name: namelInput,
            image: pictureInput,
            password: passInput
        };

        axios.post(`${URL_base}/auth/sign-up`, body)
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => {
                setActiveDisabled(false);
                alert(`Erro ${err.response.status} - ${err.response.data.message}`);
                console.log(err)
            });
    }

    return (
        <Container>
            <ContainerInt>
                <LogoLoginRegister />
                <form onSubmit={registerUser}>
                    <input data-test="email-input" type="email" placeholder="email" value={emailInput} onChange={e => setEmailInput(e.target.value)} required disabled={activeDisabled}/>
                    <input data-test="password-input" type="password" placeholder="senha" value={passInput} onChange={e => setPassInput(e.target.value)} required disabled={activeDisabled}/>
                    <input data-test="user-name-input" type="text" placeholder="nome" value={namelInput} onChange={e => setNameInput(e.target.value)} required disabled={activeDisabled}/>
                    <input data-test="user-image-input" type="text" placeholder="foto" value={pictureInput} onChange={e => setPictureInput(e.target.value)} required disabled={activeDisabled}/>
                    <ButtonSubmit data-test="signup-btn" disabled={activeDisabled}>
                        {activeDisabled === true ? <Loading /> : "Cadastrar"}
                    </ButtonSubmit>
                </form>
                <Link data-test="login-link" to="/"><p>Já tem uma conta? Faça login!</p></Link>
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
const ButtonSubmit = styled.button`
    opacity: ${props => props.disabled === false ? 1 : 0.7 };
`
