import React, { useState } from 'react';
import "./Topnav.css";
import { Header, Icon } from '..';
import { BsMoonFill } from 'react-icons/bs';
import { FaSun, FaHamburger, FaUserCircle, FaHome, FaStickyNote, FaTrash } from 'react-icons/fa';
import { IoMdLogIn } from 'react-icons/io';
import { BiLogOutCircle } from 'react-icons/bi';
import { MdArchive } from 'react-icons/md';
import { useAuth, useTheme } from '../../Context';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

const Topnav = ({showHamburger}) => {
  const { themeState, themeDispatch } = useTheme();
  const [showDropdown, setShowDropdown] = useState(false);
  const { theme } = themeState;
  const { userLogin, setUserLogin } = useAuth();
  const navigate = useNavigate();
  const setList = theme==="light" ? "side-list-light" : "side-list-dark";
  const setSideNav = theme==="light" ? "side-nav-light" : "side-nav-dark";
  const setText = theme==="light" ? "text-light" : "text-dark";
  return (
    <div className={`top-nav ${theme==="light" ? "top-light" : "top-dark"}`}>
      <Header />
      <div className="icon-div">
        {showHamburger && <Icon iconborder={false} onClick={()=>setShowDropdown(!showDropdown)}>
          <FaHamburger className="nav-icon hamburger"/>
        </Icon>}
        {showDropdown && <div className={`menu ${setSideNav}`}>
          <ul className="lists">
            <li className={`dis-flex side-list ${setList}`}>
              <Link to="/" className="btn-link path-link">
                <Icon iconborder={false}>
                  <FaHome className="side-icons"/>
                </Icon>
                <h3 className={setText}>Home</h3>
              </Link>  
            </li>
            <li className={`dis-flex side-list ${setList}`}>
            <Icon iconborder={false}>
                <FaUserCircle className="side-icons"/>
            </Icon>
            <h3 className={setText}>Profile</h3>
            </li>
            <li className={`dis-flex side-list ${setList}`}>
              <Link to="/notes" className={`btn-link path-link`}>
                <Icon iconborder={false}>
                    <FaStickyNote className="side-icons"/>
                </Icon>
                <h3 className={setText}>Notes</h3>
              </Link>
            </li>
            <li className={`dis-flex side-list ${setList}`}>
              <Link to="/archive" className={`btn-link path-link`}>
                <Icon iconborder={false}>
                    <MdArchive className="side-icons"/>
                </Icon>
                <h3 className={setText}>Archieve</h3>
              </Link>
            </li>
            <li className={`dis-flex side-list ${setList}`}>
              <Link to="/trash" className={`btn-link path-link`}>
                <Icon iconborder={false}>
                    <FaTrash className="side-icons"/>
                </Icon>
                <h3 className={setText}>Trash</h3>
              </Link>
            </li>
          </ul>
        </div>}
        {theme==="dark" ? 
        <Icon iconborder={true} onClick={()=>themeDispatch({type: "light"})}>
          <FaSun className="nav-icon"/>
        </Icon>
        :
        <Icon iconborder={true} onClick={()=>themeDispatch({type: "dark"})}>
          <BsMoonFill className="nav-icon"/>
        </Icon>}
        { !userLogin ?
        <Link to="/login" className="btn-link">
          <Icon iconborder={true}>
            <IoMdLogIn className="nav-icon"/>
          </Icon>
        </Link> 
        :
        <Icon iconborder={true} onClick={()=>{
          setUserLogin(false);
          localStorage.removeItem("userToken");
          navigate("/", { replace: true })
        }}>
          <BiLogOutCircle className="nav-icon"/>
        </Icon>}
      </div>
    </div>
  )
}

export { Topnav };
