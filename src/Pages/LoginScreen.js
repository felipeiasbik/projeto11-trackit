import styled from "styled-components";
import LogoLoginRegister from "../Components/LogoLoginRegister";
import { URL_base } from "../Constants/URL_base";
import { useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loading from "../Constants/Loading";
import {MyContext} from "../context/MyContext";

export default function LoginScreen(){

    const [emailInput,setEmailInput] = useState("");
    const [passInput,setPassInput] = useState("");
    const [activeDisabled,setActiveDisabled] = useState(false);
    const navigate = useNavigate();
    const {setLoginOk} = useContext(MyContext);

    function loginUser(e){
        e.preventDefault();

        setActiveDisabled(true);

        const body = { email: emailInput, password: passInput};

        axios.post(`${URL_base}/auth/login`, body)
            .then(res => {
                setLoginOk(res.data);
                navigate("/hoje");
            })
            .catch(err => {
                setActiveDisabled(false);
                alert(`Erro: ${err.response.data.message}`)
            })
        
    }

    return (
        <Container>
            <ContainerInt>
                <LogoLoginRegister />
                <form onSubmit={loginUser}>
                    <input data-test="email-input" type="email" placeholder="email" value={emailInput} onChange={e => setEmailInput(e.target.value)} required disabled={activeDisabled}/>
                    <input data-test="password-input" type="password" placeholder="senha" value={passInput} onChange={e => setPassInput(e.target.value)} required disabled={activeDisabled}/>
                    <ButtonSubmit data-test="login-btn" disabled={activeDisabled}>
                        {activeDisabled === true ? <Loading /> : "Entrar"}
                    </ButtonSubmit>
                </form>
                <Link data-test="signup-link" to="/cadastro"><p>Não tem uma conta? Cadastre-se</p></Link>
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
    opacity: ${props => props.disabled === false ? 1 : 0.7 };
`