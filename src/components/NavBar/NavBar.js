/**
 * @Author: Your name
 * @Date:   2023-11-10 19:59:42
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-11-11 13:51:23
 */

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import CartWidget from "../CartWidget/CartWidget";
import logo from './assets/logo.png';
import './NavBar.css';
import { useCart } from "../../context/CartContext";

const NavBar = () => {

    const { user, handleLogout} = useAuth()
    const { setCart } = useCart()
    const navigate = useNavigate()

    const [dropdown, setDropdown] = useState(false)
    const [hambMenu, setHambMenu] = useState(true)

    const toggleDropdown = () => {
        setDropdown(!dropdown)
    }

    const toggleHambMenu = () => {
        setHambMenu(!hambMenu)
    }

    const logoutAndRedirect = () => {
        handleLogout()
        setCart([])
        navigate('/login')
    }

    return (
        <nav>
            <div>
                <Link to='/'>
                    <img src={logo} alt="logo" className="logo"/>
                </Link>
            </div>
            <div className={`menu ${hambMenu ? 'mobile-menu' : ''}`}>
                <div className="categories-dropdown" onClick={toggleDropdown}>
                    <p className="nav-btn">Notebooks</p>
                    {dropdown && (
                        <span className="categories">
                            <Link className="nav-btn" to={"/category/NotebookI3"}>Notebooks I3</Link>
                            <Link className="nav-btn" to={"/category/NotebookI5"}>Notebooks I5</Link>
                            <Link className="nav-btn" to={"/category/NotebookI7"}>Notebooks I7</Link>
                       
                        </span>
                    )}
                </div>
                <div className="login">
                    { user ? (
                        <button className="nav-btn" onClick={logoutAndRedirect}>Cerrar sesion</button>
                    ) : (
                        <Link to='/login' className="nav-btn">Iniciar Sesion</Link>
                    )}
                </div>
                <div>
                    <CartWidget/>
                </div>
            </div>
            <div className="mobile-menu-icon" onClick={toggleHambMenu}>
                <button className="hamburguer-icon"/>
            </div>
        </nav>
    )
}

export default NavBar;
