import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";


const Routes = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'about',
                element:<About></About>
            },
            {
                path:'contact',
                element:<Contact></Contact>
            },
        ]
    }
])

export default Routes;