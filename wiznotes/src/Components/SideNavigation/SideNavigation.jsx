import React from 'react';
import { FaUserCircle, FaHome, FaStickyNote, FaTrash } from 'react-icons/fa';
import { MdArchive } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { Icon } from '..';
import { useTheme } from '../../Context';
import './SideNavigation.css';

const SideNavigation = () => {
    const navigate = useNavigate();
    const { themeState } = useTheme();
    const { theme } = themeState;
    const setList = theme==="light" ? "side-list-light" : "side-list-dark";
    const setSideNav = theme==="light" ? "side-nav-light" : "side-nav-dark";
    const setText = theme==="light" ? "text-light" : "text-dark";
  return (
    <div className={`side-navigation ${setSideNav}`}>
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
    </div>
  )
}

export { SideNavigation }; 