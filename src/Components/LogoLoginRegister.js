import styled from "styled-components";
import logo from "../assets/logo-completa.svg"

export default function LogoLoginRegister() {
    return (
        <Img>
            <img src={logo} alt="Logo do App TrackIt"/>
        </Img>
    )
}

const Img = styled.div`
    margin-top: 68px;
    margin-bottom: 24px;
`