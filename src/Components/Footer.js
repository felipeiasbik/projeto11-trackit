import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { HabitsContext } from "../context/MyContext";

export default function Footer(){

    const {progress} = useContext(HabitsContext);

    return (
        <Bottom data-test="menu">
            <Menu valor={"habitos"}>
                <Link data-test="menu" to="/habitos">
                    <p>Hábitos</p>
                </Link>
            </Menu>
            <Center>
                <Link to="/hoje">
                    <CircularProgressbar data-test="menu" value={progress > 0 ? progress : 0} text="Hoje" styles={
                    {
                    path:{stroke: "#ffffff"},
                    trail: 
                        {stroke: "#52B6FF"},
                    text: 
                        {fill: "#ffffff", 
                        fontSize: "22px", 
                        fontFamily: 'Lexend Deca', 
                        fontWeight: "400"}}
                    }
                    />
                </Link>
            </Center>
            <Menu>
                <Link data-test="history-link" to="/historico">
                    <p>Histórico</p>
                </Link>
            </Menu>
        </Bottom>
    )
}

const Bottom = styled.div`
    margin-top: 200px;
    width: 100%;
    height: 70px;
    box-sizing: border-box;
    background-color: #ffffff;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const Menu = styled.div`
    width: 100px;
    display: flex;
    justify-content: ${props => (props.valor === "habitos" ? "flex-start" : "flex-end")};
    p{
        color: #52B6FF;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
    }
`
const Center = styled.div`
    width: 91px;
    height: 91px;
    box-sizing: border-box;
    background-color: #52B6FF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 10px;
    padding: 6px;
`