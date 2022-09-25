import { MenuLink, MenuWrapper } from "./styles"
import { IoIosArrowDown } from 'react-icons/io'
import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { MenuContext } from "../../contexts/MenuContext";

export const Menu = () => {
    const [categoriesIsVisible, setCategoriesIsVisible] = useState(false);
    const { menuIsVisible, toggleVisible } = useContext(MenuContext);

    return (
        <MenuWrapper isVisible={menuIsVisible}>
            <nav>
                <MenuLink><div onClick={toggleVisible}>inicio</div></MenuLink>
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