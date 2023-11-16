import React from "react";
import logoHenry from "../../assets/logo-henry.png";
import styleNav from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className={styleNav.container}>
      <ul className={styleNav.menu}>
        <li>
          <NavLink to= "/" ><img src={logoHenry} alt="logo-henry" /></NavLink>
        </li>
        <li>
          <h1>Central de Cruceros</h1>
        </li>
        <div className={styleNav.options}>
          <li>
            <span><NavLink to= "/shipping" style = {({isActive}) => isActive ? {color: "white"} : null}>Navieras</NavLink></span>
          </li>
          <li>
            <span><NavLink to= "/discounts" className={({ isActive }) => (isActive ? "active" : "disable")}>Promociones</NavLink></span>
          </li>
        </div>
      </ul>
    </div>
  );
}
