import About from "@/views/About";
import Home from "@/views/Home";
import { RouteObject, Navigate } from "react-router-dom";

const router: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to={'/home'}/>
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
]

export default router;