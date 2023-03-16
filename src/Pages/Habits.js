import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styled from "styled-components";
import { useEffect,useState } from "react";
import axios from "axios";
import { URL_base } from "../Constants/URL_base";
import HabitsDays from "../Components/HabitsDays";

export default function Habits(){

    const [montaHabito,setMontaHabito] = useState({name: "", days: []});
    const [dias,setDias] = useState([]);

    useEffect(() => {
        console.log(dias)
    },[dias]);

    function postHabit(e){

        // e.preventDefault();

        // const config = {...montaHabito};

        // axios.post(`${URL_base}/habits`, config)
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
    }


    return (
        <>
        <Header />
            <Container data-test="habit-create-container">
                <MyHabits>
                    <p>Meus hábitos</p>
                    <button data-test="habit-create-btn">+</button>
                </MyHabits>
                <FrameAddHabit>
                    <form onSubmit={postHabit}>
                        <input data-test="habit-name-input" type="text" placeholder="nome do hábito" required/>
                        <Dias>
                            <HabitsDays dias={dias} setDias={setDias}/>
                        </Dias>
                        <BottomFrame>
                            <Cancel data-test="habit-create-cancel-btn" type="reset">Cancelar</Cancel>
                            <Submit data-test="habit-create-save-btn" type="submit">Salvar</Submit>
                        </BottomFrame>
                    </form>
                </FrameAddHabit>
            </Container>
            {/* <ContainerFrame data-test="habit-container">
                <FrameFixed>
                    <p data-test="habit-name">Ler um capítulo de livro</p>
                    <ion-icon name="trash-outline" data-test="habit-delete-btn"></ion-icon>
                    <Dias>
                        <button data-test="habit-day" type="button">D</button>
                        <button data-test="habit-day" type="button">S</button>
                        <button data-test="habit-day" type="button">T</button>
                        <button data-test="habit-day" type="button">Q</button>
                        <button data-test="habit-day" type="button">Q</button>
                        <button data-test="habit-day" type="button">S</button>
                        <button data-test="habit-day" type="button">S</button>
                    </Dias>
                </FrameFixed>
                <InterArea>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </InterArea>
            </ContainerFrame> */}
        <Footer />
        </>
    )
}

const Container = styled.div`
    margin: 98px 18px;
    box-sizing: border-box;
`
const ContainerFrame = styled.div`
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