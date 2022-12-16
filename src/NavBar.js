import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
  } from 'reactstrap';
  
import "./css/Navbar.css"

const Navbar = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/meals/name/${searchTerm}`);
        setSearchTerm("");
    }

    return (
        <>
  <Navbar
    className="my-2"
    color="dark"
    dark
  >
    <NavbarBrand href="/">
      <img
        alt="logo"
        src="/logo-white.svg"
        style={{
          height: 40,
          width: 40
        }}
      />
    </NavbarBrand>
  </Navbar>
  <Navbar
    className="my-2"
    color="secondary"
    dark
  >
    <NavbarBrand href="/">
      Reactstrap
    </NavbarBrand>
  </Navbar>
  <Navbar
    className="my-2"
    color="dark"
    dark
  >
    <NavbarBrand href="/">
      <img
        alt="logo"
        src="/logo-white.svg"
        style={{
          height: 40,
          width: 40
        }}
      />
      Reactstrap
    </NavbarBrand>
  </Navbar>
</>

        // <div className="Navbar">
        //     <a className="active" onClick={() => {navigate(`/`)}}>Home</a>
        //     <a onClick={() => {navigate(`/meals`)}}>View list</a>
        //     <div class="mx-auto">
        //         <h1>Testing</h1>
        //     </div>
        //     <div className="Navbar-right">
        //         <form className="MealSearchForm">
        //             <input 
        //                 type="text"
        //                 placeholder="Meal Name"
        //                 value={searchTerm}
        //                 onChange={handleChange}
        //             />
        //             <button onClick={handleSubmit}>🔍</button>
        //         </form>
        //     </div>
        // </div>
    );
}

export default Navbar;