import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Entries from "../components/Entries";
import Projects from "../components/Projects";
export default function ListRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/entries" element={<Entries />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/register" element={<Register />}></Route>
        </Routes>
    );
}
