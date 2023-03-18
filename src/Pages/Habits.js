import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styled from "styled-components";
import { useEffect,useState, useContext } from "react";
import axios from "axios";
import { URL_base } from "../Constants/URL_base";
import HabitsDays from "../Components/HabitsDays";
import {MyContext} from "../context/MyContext";
import MyHabits from "../Components/MyHabits";
import DisplayHabits from "../Components/DisplayHabits";

export default function Habits(){

    const [dias,setDias] = useState([]);
    const [exibeTela,setExibeTela] = useState();
    const [habitos,setHabitos] = useState([]);
    const [nomeHabitoInput,setNomeHabitoInput] = useState("");
    const [activeDisabled,setActiveDisabled] = useState(false);
    const [rodar,setRodar] = useState(0);
    const {loginOk} = useContext(MyContext);

    useEffect(() => {
        const token = loginOk.token;
        const config = {
            headers: {Authorization: `Bearer ${token}`}
        }
        axios.get(`${URL_base}/habits`, config)
            .then(res => {
                const valor = res.data;
                setHabitos(valor);
                if (res.data.length > 0){
                    setExibeTela(2);
                } else if (res.data.length === 0){
                    setExibeTela(0);
                }
            })
            .catch(err => {
                alert(err.response.data.message);
            })
    },[rodar]);

    function postHabit(e){

        e.preventDefault();
        
        if(nomeHabitoInput === ""){

            alert("Erro: Coloque um nome para o hábito")

        } else {

            setActiveDisabled(true);

            const token = loginOk.token;
            const body = {name: nomeHabitoInput, days: dias};
            const config = {
                headers: {Authorization: `Bearer ${token}`}
            }
    
            axios.post(`${URL_base}/habits`, body, config)
                .then(res => {
                    setExibeTela(2);
                    setNomeHabitoInput("");
                    setDias([]);
                    setRodar(rodar+1);
                    setActiveDisabled(false);
                })
                .catch(err => {
                    alert(err.response.data.message);
                    setActiveDisabled(false);
                });

        }

    }

    return (
        <>
        <Header />
            <ContainerExterno>
                <MyHabits setExibeTela={setExibeTela} habitos={habitos}/>
                <CriaHabito exibeTela={exibeTela} data-test="habit-create-container">
                    <FrameAddHabit>
                        <form onSubmit={postHabit}>
                            <input disabled={activeDisabled} data-test="habit-name-input" type="text" placeholder="nome do hábito" value={nomeHabitoInput} onChange={e => setNomeHabitoInput(e.target.value)}/>
                            <Dias>
                                <HabitsDays dias={dias} setDias={setDias} activeDisabled={activeDisabled}/>
                            </Dias>
                            <BottomFrame>
                                <Cancel disabled={activeDisabled} 
                                data-test="habit-create-cancel-btn" 
                                type="reset" 
                                onClick={() => {
                                    if (habitos.length === 0){
                                        setExibeTela(0);
                                    } else {
                                        setExibeTela(2);
                                    }
                                    }}>
                                Cancelar
                                </Cancel>
                                <Submit disabled={activeDisabled} data-test="habit-create-save-btn" type="submit">Salvar</Submit>
                            </BottomFrame>
                        </form>
                    </FrameAddHabit>
                </CriaHabito>
                <MostraHabito exibeTela={exibeTela} >
                    <DisplayHabits habitos={habitos} rodar={rodar} setRodar={setRodar}/>                    
                </MostraHabito>
                <MensagemHabito exibeTela={exibeTela}>
                    <InterArea>
                            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </InterArea>
                </MensagemHabito>
            </ContainerExterno>
        <Footer />
        </>
    )
}

const CriaHabito = styled.div`
    display: ${props => props.exibeTela === 1 || props.exibeTela === 3 ? "block" : "none"};
`
const MostraHabito = styled.div`
    display: ${props => props.exibeTela === 2 ? "block" : "none"};
`
const MensagemHabito = styled.div`
    display: ${props => props.exibeTela === 0 || props.exibeTela === 3 ? "block" : "none"};
`
const ContainerExterno = styled.div`
    margin: 98px 18px;
    box-sizing: border-box;
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