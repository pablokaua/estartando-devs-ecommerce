import { useEffect, useState } from "react"
import { Carousel } from "../../components/Carousel/index."
import { CategoryButton } from "../../components/CategoryButton"
import { Header } from "../../components/Header"
import { ProductCard } from "../../components/ProductCard"
import StyledInput from "../../components/searchBar"
import { getProducts } from "../../services/productService"
import { CategoriesWrapper, HomeWrapper, ProductsWrapper } from "./styles"

export const Home = () => {
    const [products, setProducts] = useState([]);
    const [productsBanner, setProductsBanner] = useState([])
    const categories = [
        {name: 'design ux', color: '#6C63FF'},
        {name: 'front-end', color: '#81CAA8'},
        {name: 'back-end', color: '#1EC0D6'},
    ]

    useEffect(() => {
        const productsPromise = getProducts();

        productsPromise
        .then(result => {
            setProducts(result.data[1])
            setProductsBanner(result.data[0])
        })
        .catch(error => console.error(error))
    }, [])

    console.log(products)

    return(
        <HomeWrapper>
            <Header />
            <StyledInput />
            <Carousel banners={productsBanner}/>
            
            <CategoriesWrapper>
                <h2>Categorias</h2>
                {categories.map(category => (
                    <CategoryButton key={category.name} categoryName={category?.name} color={category?.color}/>
                ))}
            </CategoriesWrapper>

            <ProductsWrapper>
                <h2>Produtos</h2>
                <div>
                {products?.map(product => (
                    <ProductCard 
                    key={product?.id}
                    name={product?.name}
                    price={product?.price}
                    image={product?.images?.[0]}/>
                ))}
                </div>
            </ProductsWrapper>
        </HomeWrapper>
    )
}