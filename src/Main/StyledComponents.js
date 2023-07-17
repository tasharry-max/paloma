import {device} from '../utils';
import {motion} from "framer-motion";
import styled from 'styled-components'
import mainBg from '../img/main_bg.jpg'

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
    max-height: 90%;
    top: 5%;
    left: 5%;
    position: absolute;
    @media ${device.laptopS} {
      max-height: 75vh;
      top: 12%;
  }
    @media ${device.tablet} {
      max-height: 70vh;
      top: 15%;
  }
  @media ${device.mobile} {
      max-height: 35vh;
      top: 30%;
  }
`

export const Menu = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  text-align: left;
  position: absolute;
  bottom: 0vh;
  left: 35%;
  font-family: 'Anton', sans-serif;
  font-weight: 400;
  font-size: 8rem;
  line-height: 1;
  transform: rotate(-90deg);
  transform-origin: right;
  text-transform: uppercase;
  max-height: 100vh;
  max-width: 100vw;
  @media ${device.desktop} and (max-height: 800px) {
    bottom: 5%;
  }
  @media ${device.desktop} {
    font-size: 6rem;
  }
  @media ${device.laptop} {
    font-size: 5rem;
  }
  @media ${device.laptopS} {
    font-size: 4.5rem;
    left: 30%;
   
  }
  @media ${device.tablet} {
    font-size: 3.5rem;
    transform: rotate(0deg);
    text-align: right;
    right: 2%;
    top: 10%;
  }
  @media ${device.mobile} {
    font-size: 2.5rem;
    top:10%;
    transform: rotate(0deg);
    text-align: right;
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