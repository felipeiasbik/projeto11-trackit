import DiasSemana from "../Constants/DiasSemana";
import styled from "styled-components";
import { URL_base } from "../Constants/URL_base";
import axios from "axios";
import { useContext } from "react";
import MyContext from "../context/MyContext";

export default function DisplayHabits( {habitos, rodar, setRodar} ){

    const {loginOk} = useContext(MyContext);    

    function deleteHabit(id){

        if (window.confirm("Quer mesmo apagar este hábito?")){
            const token = loginOk.token;
            const config = {
            headers: {Authorization: `Bearer ${token}`}
        }

        axios.delete(`${URL_base}/habits/${id}`, config)
            .then(res => {
                setRodar(rodar+1);
            })
            .catch(err => alert(err.response.data.message));

        }

    }

    return (
        habitos.map((hab) => 
        <FrameFixed key={hab.id}>
            <p data-test="habit-name">{hab.name}</p>
            <ion-icon name="trash-outline" data-test="habit-delete-btn" onClick={() => deleteHabit(hab.id)}></ion-icon>
            <Dias>
            {DiasSemana.map( (dia, ind) => <ButtonDay key={ind} cor={hab.days.includes(ind) ? true : false} data-test="habit-day" type="button" disabled>{dia}</ButtonDay>)}
            </Dias>
        </FrameFixed>     
        ) 
    )
}
const Dias = styled.div`
    display: flex;
    gap: 4px;
    width: 234px;
    margin-top: 8px;
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
const ButtonDay = styled.button`
    background-color: ${props => props.cor === false ? "#ffffff" : "#cfcfcf"};
    border: 1px solid #D4D4D4;
    width: 30px;
    height: 30px;
    padding: 3px;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.cor === false ? "#DBDBDB" : "#ffffff"};
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
`