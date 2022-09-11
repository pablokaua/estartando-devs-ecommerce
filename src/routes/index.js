import { Route, Routes } from "react-router-dom"
import { Product } from "../pages/Product"

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<div>Home</div>}/>
            <Route path="/produtos/:id" element={<Product/>}/>
            <Route path="/sacola" element={<div>sacola</div>}/>
        </Routes>
    )
}