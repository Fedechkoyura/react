import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
    	<ul>
			<li><NavLink to="/profile" exact activeClassName={classes.active2}>Profile</NavLink></li>
			<li><NavLink to="/dialogs" exact activeClassName={classes.active3}>Dialogs</NavLink></li>
			<li><NavLink to="/news" exact activeClassName={classes.active4}>News</NavLink></li>
			<li><a>Music</a></li>
			<li><a>Setting</a></li>
		</ul>
    </nav>
  );
}

export default Navbar;