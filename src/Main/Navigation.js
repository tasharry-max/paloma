import styled from "styled-components"
import {motion} from "framer-motion";
import {device} from "../utils"

const Menu = styled(motion.nav)`
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
`

const MenuItem = styled(motion.a)`
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

export default function Navigation() {
    return (
        <Menu>
            <MenuItem href="#" alt="hear" class="underline">Hear</MenuItem>
            <MenuItem href="#" alt="latest">Latest</MenuItem>
            <MenuItem href="#" alt="tour">Tour</MenuItem>
            <MenuItem href="#" alt="see">See</MenuItem>
            <MenuItem href="#" alt="shop">Shop</MenuItem>
            <MenuItem href="#" alt="watch">Watch</MenuItem>
            <MenuItem href="#" alt="personal">Personal</MenuItem>
            <MenuItem href="#" alt="aid">Aid</MenuItem>
        </Menu>
    )
}