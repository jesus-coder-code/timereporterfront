import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
export default function ListRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/register" element={<Register />}></Route>
        </Routes>
    );
}
