import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import Services from "../pages/Services";

export const publicRoutes = [
    {path: "/", name: "Home", Component: Home},
    {path: "/about", name: "About", Component: About},
    {path: "/services", name: "Services", Component: Services},
    {path: "/contact", name: "Contact", Component: Contact},
    {path: "/login", name: "Login", Component: Login},
  ]