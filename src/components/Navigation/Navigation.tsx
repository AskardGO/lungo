import {
    createBrowserRouter,
    RouterProvider,
    Outlet
  } from "react-router-dom";
import { TopSection } from "../TopSection/TopSection";
import { Header } from "./Header/Header";

const Home = () => (
    <>
      <Header/>
      <Outlet />
    </>
  )
  
  const About = () => <div>about</div>;
  const Contact = () => <div>contact</div>;
  const Menu = () => <div>menu</div>;
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "/", element: <TopSection /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/menu", element: <Menu /> },
      ],
    },
  ]);

export const RouteProvider = () => <RouterProvider router={router}/>