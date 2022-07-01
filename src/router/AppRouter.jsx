import { Route, Routes, Navigate } from "react-router-dom"
import { AdminRoutes } from "../module/admin/routes/AdminRoutes"
import { AuthRoutes } from "../module/auth/routes/AuthRoutes"
import { ProductRoutes } from "../module/products/routes/ProductRoutes"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={ <AuthRoutes /> } />
        <Route path="/products/*" element={ <ProductRoutes /> }/>
        <Route path="/admin/*" element={ <AdminRoutes />}/>
        <Route path="/*" element={ <Navigate to='/auth/login' /> }/>
    </Routes>
  )
}
