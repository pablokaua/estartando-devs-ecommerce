import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Product } from "../pages/Product"

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/produtos/:id" element={<Product/>}/>
            <Route path="/sacola" element={<div>sacola</div>}/>
        </Routes>
    )
}