import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import UserContext from "./UserContext";

import "./css/Navbar.css"

const Navbar = () => {
    const navigate = useNavigate();
    const { username, logout } = useContext(UserContext);

    return (
        <div className="Navbar">
            <div className="Navbar-left">
                <button className="active" onClick={() => {navigate(`/`)}}>HOME</button>
                <button onClick={() => {navigate(`/meals`)}}>MEALS</button>
                <button onClick={() => {navigate(`/favorites`)}}>FAVORITES</button> 
            </div>
            {!username ? 
                <div className="Navbar-right">
                    <button onClick={() => {navigate(`/users/login`)}}>Login</button>
                    <button onClick={() => {navigate(`/users/register`)}}>Sign up</button>
                </div>
                :
                <div className="Navbar-right">
                    <button>{username}</button>
                    <button onClick={logout}>Log out</button>
                </div>
            }
            
        </div>
    );
}

export default Navbar;