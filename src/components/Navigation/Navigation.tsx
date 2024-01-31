import {
    createBrowserRouter,
    RouterProvider,
    Outlet, Route, Routes
} from "react-router-dom";
import {TopSection} from "../TopSection/TopSection";
import {Header} from "./Header/Header";
import React, {useEffect, useMemo, useState} from "react";
import {Contact} from "../../pages/Contact";

const BaseComponent = () => {

    useEffect(() => {
        const clearLocalStorage = () => {
            localStorage.removeItem("main_animation_played");
        };

        window.addEventListener("beforeunload", clearLocalStorage);

        return () => {
            window.removeEventListener("beforeunload", clearLocalStorage);
        };

    }, []);

    return <>
        <Header/>
        <Outlet/>
    </>
}

const Home = () => {

    const status = useState<boolean>(!!localStorage.getItem("main_animation_played") || false);

    return useMemo(() => <TopSection animationStatus={status}/>, [status])

}

const About = () => <div>about</div>;

const Menu = () => <div>menu</div>;

const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseComponent/>,
        children: [
            {path: "/", element: <Home/>},
            {path: "/about", element: <About/>},
            {path: "/contact", element: <Contact/>},
            {path: "/menu", element: <Menu/>},
        ],
    },
]);

export const RouteProvider = () => <RouterProvider router={router}/>