import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyContext";
import { URL_base } from "../Constants/URL_base";
import axios from "axios";

export default function TodayList( {habitos, rodar, setRodar} ){

    const {loginOk} = useContext(MyContext);

    console.log(habitos)


    return (
        habitos.map( hab => {

            function checkHabito(){
                if (hab.done === false){
                    const token = loginOk.token;
                    const body = {};
                    const config = {
                        headers: {Authorization: `Bearer ${token}`}
                    }

                    axios
                        .post(`${URL_base}/habits/${hab.id}/check`, body, config)
                        .then (res => {
                            console.log(res.data);
                            setRodar(rodar + 1);
                        })
                        .catch(err => {
                            alert(err.response.data.message)
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
                            console.log(res.data);
                            setRodar(rodar + 1);
                        })
                        .catch(err => {
                            alert(err.response.data.message)
                        })
                }
            }

            return (
                <HabitToday key={hab.id} data-test="today-habit-container">
                    <Texts>
                        <h2 data-test="today-habit-name" >{hab.name}</h2>
                        <p data-test="today-habit-sequence">Sequência atual: 3 dias</p>
                        <p data-test="today-habit-record">Seu recorde: 5 dias</p>         
                    </Texts>
                    <Check cor={hab.done} onClick={() => checkHabito()} data-test="today-habit-check-btn">
                        <ion-icon name="checkmark"></ion-icon>
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
    background-color: ${props => props.cor === true ? "#8FC549" : "#E7E7E7"};
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