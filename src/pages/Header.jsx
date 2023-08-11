import React from "react";
import
{BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
from 'react-icons/bs'

function Header () {


    return(
        <header className="header">
            <div className="menu-icon">
                <BsJustify className="icon" />
            </div>
            <div className="header-left">
                <BsSearch className="icon"/>
            </div>
            <div className="header-right">
                <BsFillBellFill className="icon" />
                <BsFillEnvelopeFill className="icon" />
                <a href="/perfil" className="header-link"><BsPersonCircle className="icon" /></a>
            </div>
        </header>
    );

};
 export default Header;