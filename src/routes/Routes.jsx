import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/Homepage/HomePage";
import MainLayout from "../layout/MainLayout";
import Timeline from "../pages/Timeline/Timeline";
import Status from "../pages/Status/Status";
import Errorpage from "../pages/ErrorPage/Errorpage";


export const router = createBrowserRouter([

    {
        path: '/', 
        element: <MainLayout/>,
        children: [
            {
                index:true,
                element: <HomePage/>
            },
            {
                path: '/timeline',
                element: <Timeline/>
            },
            {
                path: '/status',
                element: <Status/>
            }

        ],
        errorElement: <Errorpage></Errorpage>
    }
])