import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
    	<ul>
			<li><NavLink to="/profile" className={classes.test} activeClassName={classes.nav_link_active}>Profile</NavLink></li>
			<li><NavLink to="/dialogs" className={classes.test} activeClassName={classes.nav_link_active}>Dialogs</NavLink></li>
			<li><NavLink to="/news" className={classes.test} activeClassName={classes.nav_link_active}>News</NavLink></li>
			<li><a>Music</a></li>
			<li><a>Setting</a></li>
		</ul>
    </nav>
  );
}

export default Navbar;