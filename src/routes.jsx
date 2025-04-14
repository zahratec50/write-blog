import Login from "./components/login/Login";
import Register from "./components/Register/Register";
import Home from "./pages/Home/Home";

const routes = [
    {path: "/", element: <Home/>},
    {path: "/login", element: <Login/>},
    {path: "/register", element: <Register/>},
]

export default routes;