import { Route, Routes, Navigate } from "react-router-dom";
import { ProductDetailPage } from "../pages/ProductDetailPage";
import { ProductPage } from "../pages/ProductPage";
import { PurchasingOrder } from "../pages/PurchasingOrder";
import { PurchasingProcess } from "../pages/PurchasingProcess";
import { ShoppingCar } from "../pages/ShoppingCar.jsx";

export const ProductRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <ProductPage />}/>
        <Route path="details/:id" element={ <ProductDetailPage />}/>
        <Route path="car" element={ <ShoppingCar /> }/>
        <Route path="purchasing" element={ <PurchasingProcess /> }/>
        <Route path="order/:id" element={ <PurchasingOrder /> }/>
        <Route path="/*" element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
