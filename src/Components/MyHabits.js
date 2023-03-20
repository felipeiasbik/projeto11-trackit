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
            <ButtonPlus onClick={() => exibeCriaHabito()} data-test="habit-create-btn">+</ButtonPlus>
        </MyHabitsDiv>
    )
}

const ButtonPlus = styled.button`
    width: 100%;
    height: 45px;
    background-color: #52B6FF;
    border-radius: 5px;
    border: 0;
    color: #ffffff;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 21px;
    font-weight: 400;
    line-height: 26px;
    box-sizing: border-box;
`
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