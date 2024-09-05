
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registro from '../pages/Registro';
import  InicioSesion from '../pages/InicioSesion'
import Home from "../pages/Home";

const Routing = () => {
    return (
      <Router>
        <Routes>
            <Route path='/' element={<Registro />} />
            <Route path='/InicioSesion' element={<InicioSesion />} />
            <Route path='/Home' element={<Home />} />
         </Routes>
      </Router>
    )
}

export default Routing;