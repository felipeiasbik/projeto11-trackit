import styled from "styled-components";
import LogoLoginRegister from "../Components/LogoLoginRegister";

export default function RegisterScreen(){
    return (
        <Container>
            <ContainerInt>
                <LogoLoginRegister />
                <input type="email" placeholder="email" required/>
                <input type="senha" placeholder="password" required/>
                <input type="text" placeholder="nome" required/>
                <input type="text" placeholder="foto" required/>
                <button>Cadastrar</button>
                <p>Já tem uma conta? Faça login!</p>
            </ContainerInt>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
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