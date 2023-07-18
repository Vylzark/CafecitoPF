import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Error404 } from "./pages/Error404";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { About } from "./pages/about";
import { Carrito } from "./pages/Carrito";
import "./App.css"

export const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
     <Route path="/carrito" element={<Carrito />} />
     <Route path="/navbar" element={<NavBar />} />
     <Route path="/about" element={<About />}/>
     <Route path="/" element={<Home />}/> 
     <Route path="*" element={<Error404 />}/> 
     <Route path="/Menu" element={<Menu />}/>
    </Routes>
    </BrowserRouter>
  )
  ;
};

export default App;