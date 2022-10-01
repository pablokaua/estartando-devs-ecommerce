import { useContext } from "react"
import { Link } from "react-router-dom"
import { Carousel } from "../../components/Carousel/index."
import { CategoryButton } from "../../components/CategoryButton"
import { Header } from "../../components/Header"
import { Menu } from "../../components/Menu"
import { ProductsList } from "../../components/ProductsList"
import StyledInput from "../../components/searchBar"
import { ProductContext } from "../../contexts/ProductContext"
import { CategoriesWrapper, HomeWrapper } from "./styles"

export const Home = () => {
    const { products, categories } = useContext(ProductContext);
    return(
        <HomeWrapper>
            <Header/>
            <Menu/>
            <StyledInput />
            <Carousel />
            
            <CategoriesWrapper>
                <h2>Categorias</h2>
                {categories.map(category => (
                    <Link to={`/${category?.path}`} key={category?.name}>
                        <CategoryButton categoryName={category?.name} color={category?.color}/>
                    </Link>
                ))}
            </CategoriesWrapper>
            <ProductsList products={products}><h2>Produtos</h2></ProductsList>
        </HomeWrapper>
    )
}