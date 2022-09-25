import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { Carousel } from "../../components/Carousel/index."
import { CategoryButton } from "../../components/CategoryButton"
import { Header } from "../../components/Header"
import { Menu } from "../../components/Menu"
import { ProductCard } from "../../components/ProductCard"
import StyledInput from "../../components/searchBar"
import { ProductContext } from "../../contexts/ProductContext"
import { CategoriesWrapper, HomeWrapper, ProductsWrapper } from "./styles"

export const Home = () => {
    const [menuIsVisible, setMenuIsVisible] = useState(false);
    const { products } = useContext(ProductContext);

    const categories = [
        {name: 'design ux', color: '#6C63FF', path: 'design'},
        {name: 'front-end', color: '#81CAA8', path: 'frontend'},
        {name: 'back-end', color: '#1EC0D6', path: 'backend'},
    ]

    console.log(products)

    return(
            <HomeWrapper>
                <Header setIsVisible={setMenuIsVisible} isVisible={menuIsVisible}/>
                <Menu isVisible={menuIsVisible} setIsVisible={setMenuIsVisible}/>
                <StyledInput />
                <Carousel />
                
                <CategoriesWrapper>
                    <h2>Categorias</h2>
                    {categories.map(category => (
                        <Link to={`/${category?.path}`}>
                            <CategoryButton key={category.name} categoryName={category?.name} color={category?.color}/>
                        </Link>
                    ))}
                </CategoriesWrapper>

                <ProductsWrapper>
                    <h2>Produtos</h2>
                    <div>
                    {products?.map(product => (
                        <Link to={`/produtos/${product?.id - 1}`}>
                            <ProductCard key={product?.id} product={product}/> 
                        </Link>
                    ))}
                    </div>
                </ProductsWrapper>
        </HomeWrapper>
    )
}