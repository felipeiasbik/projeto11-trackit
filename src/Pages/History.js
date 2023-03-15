import styled from "styled-components";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function History(){
    return (
        <Container>
            <Header />
            <h2>History</h2>
            <InterArea>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </InterArea>
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    margin: 98px 18px;
    box-sizing: border-box;
    h2 {
        color: #126BA5;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 23px;
        font-weight: 400;
        line-height: 28px;
        margin-bottom: 17px;
    }
`
const InterArea = styled.div`
    width: 100%;
    color: #666666;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
`