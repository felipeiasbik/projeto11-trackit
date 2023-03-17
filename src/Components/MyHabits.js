import styled from "styled-components";

export default function MyHabits( {setExibeTela, habitos} ){


    function exibeCriaHabito(){
        if (habitos.length === 0){
            setExibeTela(3);
        } else {
            setExibeTela(1);
        }
    }

    return (
        <MyHabitsDiv>
            <p>Meus hábitos</p>
            <button onClick={() => exibeCriaHabito()} data-test="habit-create-btn">+</button>
        </MyHabitsDiv>
    )
}
const MyHabitsDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
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