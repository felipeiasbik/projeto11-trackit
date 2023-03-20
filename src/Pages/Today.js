import styled from "styled-components";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { URL_base } from "../Constants/URL_base";
import {HabitsContext, MyContext} from "../context/MyContext";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import TodayList from "../Components/TodayList";

export default function Today(){

    const [rodar,setRodar] = useState(0);
    const [habitos,setHabitos] = useState([]);
    const {loginOk} = useContext(MyContext);
    const {progress} = useContext(HabitsContext);
    
    useEffect(() => {
        const token = loginOk.token;
        
        const config = {
            headers: {Authorization: `Bearer ${token}`}
        }

        axios
            .get(`${URL_base}/habits/today`, config)
            .then (res => {
                const valor = res.data;
                setHabitos(valor)
            })
            .catch (err => alert(err.response.data.message))


    },[rodar]);

    return (
        <>
            <Header />
            <Container>
                <DayDate progress={progress}>
                    <h2 data-test="today">{(dayjs().locale("pt-br").format("dddd")[0].toUpperCase(0) + dayjs().locale("pt-br").format("dddd").substring(1)).replace("-feira","")}, {dayjs().format('DD/MM')}</h2>
                    <p data-test="today-counter">{progress > 0 ? `${progress}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}</p>
                </DayDate>
                <TodayList habitos={habitos} rodar={rodar} setRodar={setRodar}/>
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
        color: ${props => props.progress > 0 ? "#8FC549" : "#BABABA"};
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
    }
`