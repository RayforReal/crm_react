import Login from "@/views/login/index";
import { RouteObject, Navigate } from "react-router-dom";

const router: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to={'/login'}/>
    },
    {
        path: '/login',
        element: <Login />
    },
]

export default router;