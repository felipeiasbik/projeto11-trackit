import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { MyContext,HabitsContext } from "../context/MyContext";
import { URL_base } from "../Constants/URL_base";
import axios from "axios";
import Loading from "../Constants/Loading";

export default function TodayList( {habitos, rodar, setRodar} ){

    const [habAtual,setHabAtual] = useState("");
    const [activeDisabled,setActiveDisabled] = useState(false);
    const {loginOk} = useContext(MyContext);
    const {setProgress} = useContext(HabitsContext);

    useEffect(() => {    
        const valor1 = ((habitos.filter(v => v.done === true).length))
        const valor2 = ((habitos.length))
        let resultado = Math.floor(valor1/valor2*100)
        setProgress(resultado);
    });

    return (

        habitos.map( hab => {

            function checkHabito(){

                setHabAtual([...habAtual,hab.id]);
                setActiveDisabled(true);

                if (hab.done === false){

                    const token = loginOk.token;
                    const body = {};
                    const config = {
                        headers: {Authorization: `Bearer ${token}`}
                    }

                    axios
                        .post(`${URL_base}/habits/${hab.id}/check`, body, config)
                        .then (res => {
                            setActiveDisabled(false);
                            setHabAtual([]);
                            setRodar(rodar + 1);
                        })
                        .catch(err => {
                            alert(err.response.data.message)
                            setActiveDisabled(false);
                        })

                } else if (hab.done === true) {

                    const token = loginOk.token;
                    const body = {};
                    const config = {
                        headers: {Authorization: `Bearer ${token}`}
                    }

                    axios
                        .post(`${URL_base}/habits/${hab.id}/uncheck`, body, config)
                        .then (res => {
                            setTimeout(setActiveDisabled(false), 5000);
                            setHabAtual([]);
                            setRodar(rodar + 1);
                        })
                        .catch(err => {
                            alert(err.response.data.message);
                            setActiveDisabled(false);
                        })
                }
            }

            return (
                <HabitToday key={hab.id} data-test="today-habit-container">
                    <Texts>
                        <h2 data-test="today-habit-name" >{hab.name}</h2>
                        <p data-test="today-habit-sequence">Sequência atual: <SequenciaSpan currentSequence={hab.currentSequence} >{hab.currentSequence} {hab.currentSequence > 1 ? "dias" :  hab.currentSequence === 0 ? "" : "dia"}</SequenciaSpan></p>
                        <p data-test="today-habit-record">Seu recorde: <SequenciaRecordeSpan currentSequence={hab.currentSequence} highestSequence={hab.highestSequence}>{hab.highestSequence} {hab.highestSequence > 1 ? "dias" : hab.highestSequence === 0 ? "" : "dia"}</SequenciaRecordeSpan></p>         
                    </Texts>
                    <Check disabled={habAtual.includes(hab.id) && activeDisabled} cor={hab.done} onClick={() => checkHabito()} data-test="today-habit-check-btn">
                        {activeDisabled === true && habAtual.includes(hab.id) ? <Loading /> : <ion-icon name="checkmark"></ion-icon>}
                        
                    </Check>
                </HabitToday>
            )
        })
    )
}

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
    background-color: ${props => props.cor === true && props.disabled === false ? "#8FC549" : props.cor === false && props.disabled === false ? "#E7E7E7" : "#333333"};
    width: 69px;
    height: 69px;
    box-sizing: border-box;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${props => props.disabled === true ? "0.65" : "1"};
    ion-icon {
        font-size: 40px;
        color: #ffffff;
        --ionicon-stroke-width: 80px;
    }
`
const SequenciaSpan = styled.span`
    color: ${props => props.currentSequence > 0 ? "#8FC549" : "#666666"}
`
const SequenciaRecordeSpan = styled.span`
    color: ${props => props.currentSequence > 0 && props.currentSequence >= props.highestSequence ? "#8FC549" : "#666666"}
`