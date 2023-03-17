import DiasSemana from "../Constants/DiasSemana";
import styled from "styled-components";

export default function HabitsDays( {dias, setDias, activeDisabled} ){

    return (
        DiasSemana.map( (diaSigla, indice) => {
            
            function selecionarDias(){
                if (!dias.includes(indice)){
                    const selecDias = [...dias, indice];
                    setDias(selecDias)
                } else if (dias.includes(indice)){
                    const filterDias = dias.filter(d => d !== indice);
                    setDias(filterDias);
                }
            }

            return (
            <ButtonDay 
                data-test="habit-day"
                key={indice} 
                type="button"
                cor={dias.includes(indice) ? true : false}
                onClick={() => selecionarDias()}
                disabled={activeDisabled}>
                {diaSigla}
            </ButtonDay>
            )
        })
    )
}

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