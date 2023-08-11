import React from "react";
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill,
  BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill} 
 from 'react-icons/bs';
import { MdPointOfSale, MdForklift } from 'react-icons/md'
import { VscSignOut } from 'react-icons/vsc';
import { signOut } from "firebase/auth";
import { auth } from "../../src/firebase";
import { useNavigate } from "react-router-dom";

const Sidebar = () =>{

    const navigate = useNavigate();
    const userSignOut = () => {
        signOut(auth).then( () => {
            alert("Signed out!")
            navigate('/');
        }).catch(error => console.log(error))
    }

    return(
        <aside id="sidebar">
            <div className="sidebar-title">
                <div className="sidebar-brand">
                    <MdForklift className="icon_header"/> RETAIL
                </div>
            </div>

            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <a href="/home">
                        <BsGrid1X2Fill className='icon'/> Dashboard
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsFillArchiveFill className='icon'/> Productos
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsCart3 className='icon'/> Compras
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsPeopleFill className='icon'/> Clientes
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsListCheck className='icon'/> Inventario
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsMenuButtonWideFill className='icon'/> Reportes
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="/ventas">
                        <MdPointOfSale className='icon'/> Ventas
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsFillGearFill className='icon'/> Ajustes
                    </a>
                </li>
                <li className="sidebar-list-signout">
                    <a onClick={userSignOut}>
                        <VscSignOut className='icon'/> Sign Out
                    </a>
                </li>
            </ul>
        </aside>
    );

};
 export default Sidebar;