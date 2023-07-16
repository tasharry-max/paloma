import styled from 'styled-components'
import mainBg from '../img/main_bg.jpg'
import logo from '../img/logo.svg'
import Navigation from './Navigation'

const BackgroundImage = styled.div `
    background-image: url(${mainBg});
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    position: relative;
`

const Logo = styled.img`
    /* display: flex; */
    height: auto;
    max-height: 94vh;
    top: 3%;
    left: 5%;
    position: absolute;
`

export default function Main() {
    return (
        <>
            <BackgroundImage/>
            <Logo src={logo}/>
            <Navigation/>
        </>
    )
}