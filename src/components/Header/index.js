import LogoDevs from './logo-devs.png'
import { HeaderWrapper, Logo } from './styles'
import { FaBars } from 'react-icons/fa'
import { BiShoppingBag } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { MenuContext } from '../../contexts/MenuContext'

export const Header = () => {
    const { toggleVisible } = useContext(MenuContext);

    return (
        <HeaderWrapper>
            <div onClick={toggleVisible}>
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