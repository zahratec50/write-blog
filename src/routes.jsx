import Login from "./components/login/Login";
import Home from "./pages/Home/Home";

const routes = [
    {path: "/", element: <Home/>},
    {path: "/login", element: <Login/>},
]

export default routes;