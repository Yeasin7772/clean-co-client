import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Services from "../pages/Services";


const Routes = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                index:true,
                element:<Home></Home>

            },
            {
                path:'about',
                element:<About></About>
            },
            {
                path:'contact',
                element:<Contact></Contact>
            },
            {
                path:'services',
                element:<Services></Services>
            },
        ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>

    }
])

export default Routes;