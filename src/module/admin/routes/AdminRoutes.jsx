import { Routes, Route, Navigate } from 'react-router-dom'
import { AddProductPage } from '../pages/AddProductPage'
import { EditProduct } from '../pages/EditProduct'
import { EditUser } from '../pages/EditUser'
import { ListProductPage } from '../pages/ListProductPage'
import { OrderList } from '../pages/OrderList'
import { UsersPage } from '../pages/UsersPage'


export const AdminRoutes = () => {
  return (
    <Routes>
        <Route path="users" element={ <UsersPage /> } />
        <Route path="user/:id" element={ <EditUser /> } />
        <Route path="productslist" element={ <ListProductPage /> } />
        <Route path="addproduct" element={ <AddProductPage /> } />
        <Route path="editproduct/:id" element={ <EditProduct /> } />
        <Route path="orderslist" element={ <OrderList /> } />
        <Route path="/*" element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
