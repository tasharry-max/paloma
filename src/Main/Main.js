import logo from '../img/logo.svg'
import Navigation from './Navigation'
import { BackgroundImage, Logo } from './StyledComponents';

export default function Main() {
    return (
        <>
            <BackgroundImage/>
            <Logo src={logo} initial={{ opacity: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}  
                transition={{ duration: 1 }} 
                whileHover={{ scale: 1.05 }}/>
            <Navigation/>
        </>
    )
}