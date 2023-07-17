import styled from 'styled-components'
import mainBg from '../img/main_bg.jpg'
import {motion} from "framer-motion";
import { device } from '../utils';

export const BackgroundImage = styled.div `
    background-image: url(${mainBg});
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    position: relative;
`

export const Logo = styled(motion.img)`
    height: auto;
    max-height: 94vh;
    top: 3%;
    left: 5%;
    position: absolute;
`

export const Menu = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  text-align: left;
  position: fixed;
  bottom: 3%;
  left: 35%;
  font-family: 'Anton', sans-serif;
  font-weight: 400;
  font-size: 5rem;
  line-height: 1;
  transform: rotate(-90deg);
  transform-origin: right;
  text-transform: uppercase;
  max-height: 100vh;
  max-width: 100vw;
  @media ${device.mobile} {
    font-size: 3rem;
    transform: rotate(0deg);
    text-align: right;
  }
  @media ${device.tablet} {
    font-size: 4rem;
    transform: rotate(0deg);
    text-align: right;
  }
  @media ${device.laptopS} {
    font-size: 4.5rem;
  }
  @media ${device.laptop} {
    font-size: 5rem;
  }
  @media ${device.desktop} {
    font-size: 6rem;

  }
`

export const MenuItem = styled(motion.a)`
    color: white;
    text-decoration: none;
    margin-bottom: 0.5rem;
    letter-spacing: 5px;
    opacity: 0.7;
    position: relative;
	text-decoration: none;
    &::before{
        content: '';
        position: absolute;
        left: 0; bottom: -5px;
        width: 0;
        height: 1.5px;
        background-color: white;
        transition: width 1s;
        &:hover{
            width: 100%;
        }
    }
    &:hover {
        width: 100%;
        opacity: 1;
        scale: 1.02;
        &::before{
            width: 100%; 
        }
    }

`