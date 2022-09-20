import LogoDevs from './logo-devs.png'
import { HeaderWrapper, Logo } from './styles'
import { FaBars } from 'react-icons/fa'
import { BiShoppingBag } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <HeaderWrapper>
            <div>
                <FaBars/>
            </div>
            <Logo><img src={LogoDevs} alt="logo estartando devs"/><p>evs</p></Logo>
            <div>
                <Link to={'/sacola'}>
                    <BiShoppingBag/>
                </Link>
            </div>
        </HeaderWrapper>
    )
}