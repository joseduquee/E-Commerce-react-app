import { Route, Routes, Navigate } from "react-router-dom";
import { Login } from "../pages/LoginPage";
import { Profile } from "../pages/Profile";
import { Register } from "../pages/RegisterPage";

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="register" element={ <Register />}/>
        <Route path="/login" element={ <Login /> }/>
        <Route path="profile" element={ <Profile /> }/>

        <Route path="/*" element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
