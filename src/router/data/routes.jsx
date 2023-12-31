import { Home } from "../../pages/Home";
import { Error404 } from "../../pages/Error404";
import { Menu } from "../../pages/Menu";
import { About } from "../../pages/about";
import { Carrito } from "../../pages/Carrito";
import { Administrator } from "../../pages/Administrator";
import { LogIn } from "../../pages/logIn";
import { SignUp } from "../../pages/signUp";

export const routes =  [
     { path:"/carrito", element:<Carrito />},
     { path:"/about", element:<About />},
     { path:"/", element: <Home /> },
     { path:"*", element:<Error404 />},
     { path:"/Menu", element:<Menu />},
     { path:"/administrator", element:<Administrator />},
     { path:"/logIn", element:<LogIn />},
     { path:"/signUp", element:<SignUp />}
]    