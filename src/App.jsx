import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarMenu } from "./components/NavbarMenu";
import { Error404 } from "./pages/Error404";
import { HomePage } from "./Pages/HomePage";
import { Menu } from "./Pages/Menu";
import { About } from "./pages/about";
import { Carrito } from "./pages/Carrito";

export const App = () => {
  return (
    <BrowserRouter>
    <NavbarMenu />
    <Routes>
      <Route path="/carrito" element={<Carrito />} />
     <Route path="/about" element={<About />}/>
     <Route path="/" element={<HomePage />}/> 
     <Route path="*" element={<Error404 />}/> 
     <Route path="/Menu" element={<Menu />}/>
    </Routes>
    </BrowserRouter>
  )
  ;
};

export default App;