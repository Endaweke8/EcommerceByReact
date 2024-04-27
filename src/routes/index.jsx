import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import  Home from "../pages/Home.jsx"
import Login from "../pages/Login.jsx"

const router =createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
            {
                path:"",
                element:<Home />
            },
            {
                path:"login",
                element:<Login />
            },
        ]
    }
])


export default router
