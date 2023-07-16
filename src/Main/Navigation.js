import styled from "styled-components"
import {motion} from "framer-motion";
import {device} from "../utils"

const Menu = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  text-align: left;
  position: absolute;
  bottom: 0;
  left: 40%;
  font-family: 'Anton', sans-serif;
  font-weight: 400;
  font-size: 6.5rem;
  transform: rotate(-90deg);
  transform-origin: right;
  text-transform: uppercase;
/* 
  @media ${device.mobileM}{
    transform: rotate(0deg);
    font-size: 3rem;
    text-align: right;
  } */
`

const MenuItem = styled(motion.a)`
    color: white;
    text-decoration: none;

    margin-bottom: 0.5rem;
    line-height: 1;
    letter-spacing: 5px;
    opacity: 0.7;
    &:hover {
        opacity: 1;
        scale: 1.1;
        text-shadow: 0 0 50px #999999;
    }
`




export default function Navigation() {
    return (
        <Menu>
            <MenuItem  href="#" alt="hear">Hear</MenuItem>
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