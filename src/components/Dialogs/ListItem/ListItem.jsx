import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const ListItem = (props) => {
	let myPath = "/dialogs/" + props.id;

	return (
		<li>
			<NavLink activeClassName={s.active} to={myPath}>{props.name}</NavLink>
		</li>
	)
};

export default ListItem;