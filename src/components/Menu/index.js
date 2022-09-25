import { MenuLink, MenuWrapper } from "./styles"
import { IoIosArrowDown } from 'react-icons/io'
import { useState } from "react"
import { Link } from "react-router-dom";

export const Menu = ({isVisible, setIsVisible}) => {
    const [categoriesIsVisible, setCategoriesIsVisible] = useState(false);

    return (
        <MenuWrapper isVisible={isVisible}>
            <nav>
                <MenuLink><div onClick={() => setIsVisible(!isVisible)}>inicio</div></MenuLink>
                <MenuLink categoriesIsVisible={categoriesIsVisible}>
                    <div onClick={() => setCategoriesIsVisible(!categoriesIsVisible)}>
                        <p>categorias</p>
                        <IoIosArrowDown size={30}/>
                    </div>
                    <ul>
                        <Link to={'/design'}><li style={{color: '#6C63FF'}}>Design UX</li></Link>
                        <Link to={'/frontend'}><li style={{color: '#81CAA8'}}>Front end</li></Link>
                        <Link to={'/backend'}><li style={{color: '#1EC0D6'}}>Back end</li></Link>
                        
                    </ul>
                </MenuLink>
            </nav>
        </MenuWrapper>
    )
}