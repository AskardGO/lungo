import {
    createBrowserRouter,
    RouterProvider,
    Outlet, Route, Routes, redirect, Navigate
} from "react-router-dom";
import {TopSection} from "../TopSection/TopSection";
import {Header} from "./Header/Header";
import React, {useEffect, useMemo, useState} from "react";
import {Contact} from "../../pages/Contact";
import {About as AboutPage} from "../../pages/About";

import {ContentWrapper} from "../ContentWrapper";
import {Gallery} from "../../pages/Gallery";
import {Menu} from "../../pages/Menu";

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

const About = () => <AboutPage/>

const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseComponent/>,
        children: [
            {path: "/", element: <Home/>},
            {path: "/about", element: <ContentWrapper><About/></ContentWrapper>},
            {path: "/contact", element: <ContentWrapper><Contact/></ContentWrapper>},
            {path: "/menu", element: <ContentWrapper><Menu/></ContentWrapper>},
            {path: "/gallery", element: <ContentWrapper><Gallery/></ContentWrapper>},
        ],
        errorElement: <Navigate to="/" />
    },
]);

export const RouteProvider = () => <RouterProvider router={router}/>