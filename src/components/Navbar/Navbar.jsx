import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
    	<ul>
			<li><NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink></li>
			<li><NavLink to="/dialogs" activeClassName={classes.active}>Dialogs</NavLink></li>
			<li><NavLink to="/news" activeClassName={classes.active}>News</NavLink></li>
			<li><a>Music</a></li>
			<li><a>Setting</a></li>
		</ul>
    </nav>
  );
}

export default Navbar;