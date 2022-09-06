import LogoDevs from './logo-devs.png'
import { HeaderWrapper, Logo } from './styles'
import { FaBars } from 'react-icons/fa'
import { BiShoppingBag } from 'react-icons/bi'

export const Header = () => {
    return (
        <HeaderWrapper>
            <div><FaBars/></div>
            <Logo><img src={LogoDevs} alt="logo estartando devs"/><p>evs</p></Logo>
            <div><BiShoppingBag/></div>
        </HeaderWrapper>
    )
}