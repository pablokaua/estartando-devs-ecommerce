import { Route, Routes } from "react-router-dom"
import { Product } from "../pages/Product"

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Product/>}/>
        </Routes>
    )
}