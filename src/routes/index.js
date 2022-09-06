import { Route, Routes } from "react-router-dom"
import { Product } from "../pages/Product"

export const Routers = () => {
    return (
        <Routes>
            <Route path="/produtos:id" element={<Product/>}/>
        </Routes>
    )
}