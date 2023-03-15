import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styled from "styled-components";

export default function Habits(){
    return (
        <>
        <Header />
            <Container>
                <MyHabits>
                    <p>Meus hábitos</p>
                    <button>+</button>
                </MyHabits>
                <FrameAddHabit>
                    <input type="text" placeholder="nome do hábito" required/>
                    <Dias>
                        <button type="button">D</button>
                        <button type="button">S</button>
                        <button type="button">T</button>
                        <button type="button">Q</button>
                        <button type="button">Q</button>
                        <button type="button">S</button>
                        <button type="button">S</button>
                    </Dias>
                    <BottomFrame>
                        <Cancel type="reset">Cancelar</Cancel>
                        <Submit type="submit">Salvar</Submit>
                    </BottomFrame>
                </FrameAddHabit>
                {/* <FrameFixed>
                    <p>Ler um capítulo de livro</p>
                    <ion-icon name="trash-outline"></ion-icon>
                    <Dias>
                        <button type="button">D</button>
                        <button type="button">S</button>
                        <button type="button">T</button>
                        <button type="button">Q</button>
                        <button type="button">Q</button>
                        <button type="button">S</button>
                        <button type="button">S</button>
                    </Dias>
                </FrameFixed> */}
                <InterArea>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </InterArea>
            </Container>
        <Footer />
        </>
    )
}

const Container = styled.div`
    margin: 98px 18px;
    box-sizing: border-box;
`
const MyHabits = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    p {
        color: #126BA5;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 23px;
        font-weight: 400;
        line-height: 28px;
    }
    button {
        width: 40px;
        height: 35px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 27px;
        font-weight: 400;
        line-height: 33px;
    }
`
const FrameAddHabit = styled.div`
    width: 100%;
    border-radius: 5px;
    background-color: #ffffff;
    padding: 16px;
    box-sizing: border-box;
    margin-bottom: 29px;
`
const InterArea = styled.div`
    width: 100%;
    color: #666666;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
`
const Dias = styled.div`
    display: flex;
    gap: 4px;
    width: 234px;
    margin-top: 8px;
    button {
        background-color: #ffffff;
        border: 1px solid #D4D4D4;
        width: 30px;
        height: 30px;
        padding: 3px;
        box-sizing: border-box;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #DBDBDB;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
    }
`
const BottomFrame = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 15px;
    margin-top: 30px;
    button {
        width: 84px;
        height: 35px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
    }
`
const Cancel = styled.button`
    background-color: #ffffff;
    color: #52B6FF;
`
const Submit =styled.button`
    color: #ffffff;
`
const FrameFixed = styled.div`
    position: relative;
    background-color: #ffffff;
    width: 100%;    
    border-radius: 5px;
    padding: 16px;
    box-sizing: border-box;
    margin-bottom: 10px;
    p {
        color: #666666;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
    }
    ion-icon {
        font-size:20px;
        color: #666666;
        position: absolute;
        right: 10px;
        top: 10px;
    }
`