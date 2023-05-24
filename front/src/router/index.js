import Addelement from "../pages/Addelement";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";

export const ROUTES =[
{
    path:"/",
    element:<MainRoot/>,
    children:[
        {
            path:"",
            element:<Home/>
        },
        {
            path:"addelement",
            element:<Addelement/>
        }
    ]
}
]