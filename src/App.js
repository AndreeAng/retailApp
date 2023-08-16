import React from 'react';
import './App.css';
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CrearUsuario from './pages/crearUsuario/CrearUsuario';
import Header from './pages/Header';
import Sidebar from './pages/Sidebar';
import { Outlet } from 'react-router-dom';
import Profile from './pages/profile/Profile';
import Ventas from './pages/ventas/Ventas';
import Clientes from './pages/clientes/Clientes';
import Inventario from './pages/inventario/Inventario';

const SidebarLayout = () => (
    <>
    <div className="grid-container">
        <Header />
        <Sidebar />
        <Outlet />
    </div>
    </>
);

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route element={<SidebarLayout/>}>
              <Route path='/home' element={<Home />}></Route>
              <Route path='/crearUsuario' element={<CrearUsuario/>}></Route>
              <Route path='/perfil' element={<Profile/>}></Route>
              <Route path='/ventas' element={<Ventas/>}></Route>
              <Route path='/clientes' element={<Clientes />}></Route>
              <Route path='/inventario' element={<Inventario />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
