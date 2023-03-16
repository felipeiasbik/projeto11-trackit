import styled from "styled-components";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Today(){
    return (
        <>
            <Header />
            <Container>
                <DayDate>
                    <h2 data-test="today">Segunda, 17/05</h2>
                    <p data-test="today-counter">Nenhum hábito concluído ainda</p>
                </DayDate>
                <HabitToday data-test="today-habit-container">
                    <Texts>
                        <h2 data-test="today-habit-name" >Ler 1 capítulo de livro</h2>
                        <p data-test="today-habit-sequence">Sequência atual: 3 dias</p>
                        <p data-test="today-habit-record">Seu recorde: 5 dias</p>         
                    </Texts>
                    <Check data-test="today-habit-check-btn">
                        <ion-icon name="checkmark"></ion-icon>
                    </Check>
                </HabitToday>
                <HabitToday>
                    <Texts>
                        <h2 data-test="today-habit-name" >Ler 1 capítulo de livro</h2>
                        <p data-test="today-habit-sequence">Sequência atual: 3 dias</p>
                        <p data-test="today-habit-record">Seu recorde: 5 dias</p>         
                    </Texts>
                    <Check data-test="today-habit-check-btn">
                        <ion-icon name="checkmark"></ion-icon>
                    </Check>
                </HabitToday>
                <HabitToday>
                    <Texts>
                        <h2 data-test="today-habit-name" >Ler 1 capítulo de livro</h2>
                        <p data-test="today-habit-sequence">Sequência atual: 3 dias</p>
                        <p data-test="today-habit-record">Seu recorde: 5 dias</p>         
                    </Texts>
                    <Check data-test="today-habit-check-btn">
                        <ion-icon name="checkmark"></ion-icon>
                    </Check>
                </HabitToday>
            </Container>
            <Footer />
        </>
    )
}

const Container = styled.div`
    margin: 98px 18px 118px 18px;
    box-sizing: border-box;
`
const DayDate = styled.div`
    margin-bottom: 28px;
    box-sizing: border-box;
    h2 {
        color: #126BA5;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 23px;
        font-weight: 400;
        line-height: 28px;
    }
    p {
        color: #BABABA;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
    }
`
const HabitToday = styled.div`
    width: 100%;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 13px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`
const Texts = styled.div`
    max-width: 100%;
    height: 69px;
    color: #666666;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    h2 {
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 7px;
    }
    p {
        font-size: 13px;
        line-height: 16px;
    }
`
const Check = styled.button`
    background-color: #EBEBEB;
    width: 69px;
    height: 69px;
    box-sizing: border-box;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    ion-icon {
        font-size: 40px;
        color: #ffffff;
        --ionicon-stroke-width: 80px;
    }
`