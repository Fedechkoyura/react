import React from 'react';
import classes from './../Dialogs.module.css';

const DialogMessage = (props) => {
	return (
		<div className={classes.message}>
			<p className={classes.message_text}>{props.text}</p>
		</div>
	)
};

export default DialogMessage;