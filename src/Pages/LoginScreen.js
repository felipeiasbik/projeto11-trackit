import styled from "styled-components";
import LogoLoginRegister from "../Components/LogoLoginRegister";

export default function LoginScreen(){
    return (
        <Container>
            <ContainerInt>
                <LogoLoginRegister />
                <input type="email" placeholder="email" required/>
                <input type="password" placeholder="senha" required/>
                <button>Entrar</button>
                <p>Não tem uma conta? Cadastre-se</p>
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
    gap: 6px;
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
`