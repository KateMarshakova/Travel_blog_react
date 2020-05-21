import React from 'react';
import c from'./NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
      <nav className={c.nav}>
      <div className={c.navItem}>
        <NavLink to="/profile" activeClassName={c.active} className={c.navLink}>Profile</NavLink>
      </div>
      <div className={c.navItem}>
        <NavLink to="/dialogs" activeClassName={c.active} className={c.navLink}>Messages</NavLink>
      </div>
      <div className={c.navItem}>
        <NavLink to="/news" activeClassName={c.active} className={c.navLink}>News</NavLink>
      </div>
      <div className={c.navItem}>
        <NavLink to="blog" activeClassName={c.active} className={c.navLink}>Inspiration</NavLink>
      </div>
      <div className={c.navItem}>
        <NavLink to="music" activeClassName={c.active} className={c.navLink}>Music</NavLink>
      </div>
      <div className={`${c.navItem} ${c.navEnd}`}>
        <NavLink to="settings" activeClassName={c.active} className={c.navLink}>Settings</NavLink>
      </div>
    </nav>
    )
}

export default NavBar;