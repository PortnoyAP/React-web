import React from "react";
import { NavLink } from "react-router-dom";
import styles from  './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div class={styles.item} >
        <NavLink to='/profile' activeClassName={styles.activeLink}>Profile</NavLink>
      </div>
      <div class={styles.item}>
        <NavLink to='/dialogs' activeClassName={styles.activeLink}>Dialogs</NavLink>
      </div>
      <div class={styles.item}>
        <NavLink to='/news' activeClassName={styles.activeLink}>News</NavLink>
      </div>
      <div class={styles.item}>
        <NavLink to='/music' activeClassName={styles.activeLink}>Music</NavLink>
      </div>
      <div class={styles.item}>
        <NavLink to='/settings' activeClassName={styles.activeLink}>Settings</NavLink>
      </div>
    </nav>
    
  );
}

export default Navbar;