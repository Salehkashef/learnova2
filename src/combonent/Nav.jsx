import React from "react";
import style from "./Nav.module.css";
import logo from "../assets/img/V01.png";
import { NavLink } from "react-router-dom";
import img from "../assets/img/person.png"
function Nav() {
  return (
    <>
      <nav className={style.nav} data-bs-theme="dark">
        <div className="container-fluid navbar navbar-expand-lg">
          <NavLink className="navbar-brand ms-5" to="/">
            <img src={logo} className={style.logo} />
          </NavLink>
          <div
            className={`collapse navbar-collapse ms-3  ${style.links}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li>
                <NavLink className="nav-link active ms-3 me-3" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link active ms-3 me-3" to="/corses">
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link active ms-3 me-3" to="/Allcourses">
                  AllCourses
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link active ms-3 me-3" to="/teach">
                  Teach in learnova
                </NavLink>
              </li>
            </ul>
     
            
          </div>
          <form class={`d-flex ${style.form}`} role="search">
      <li  className={`btn btn-outline-light rounded-pill ms-3 me-3 mt-3 ${style.log}`} ><NavLink className="nav-link active ms-2 me-2 " to="/Login">Login</NavLink></li>
      <li  className={`btn btn-outline-light rounded-pill ms-3 me-3 mt-3 ${style.log}`} ><NavLink className="nav-link active ms-2 me-2 " to="/Register">Signup</NavLink></li>

  
        
        
        <dev className={`nav-item dropdown ms-3 me-3 ${style.dropdown}`}>
          <img src={img} alt="" className={style.img} />
          <a
            className="nav-link dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Lina
          </a>
          <ul className={`dropdown-menu ${style.menu}`}>
            <li>
            <NavLink  class="ms-1 nav-link active ms-2 me-3" to="/user-peofile">settings</NavLink> 
            </li>
            <hr />
            <button
          className={`btn  rounded-pill  me-3 ${style.logout}`}
          type="submit"
        >
          logout
          </button>
          </ul>
          </dev>
      </form>
        </div>
      </nav>
    </>
  );
}

export default Nav;
