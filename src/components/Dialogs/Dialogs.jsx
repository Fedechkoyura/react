import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import ListItem from './ListItem/ListItem.jsx';
import DialogMessage from './DialogMessage/DialogMessage.jsx';
import {addMessageActionCreator, updateMessageActionCreator} from '../../redux/state';


const Dialogs = (props) => {
	
	let newMessageElement = React.createRef();

	let addMessage = () => {
		let text = newMessageElement.current.value;
		props.dispatch(addMessageActionCreator())
	};

	let messageTextUpdate = () => {
		let text = newMessageElement.current.value;
		props.dispatch(updateMessageActionCreator(text));
	}

	let dialogsElement = props.stateDialogPage.dialogsData.map( d => <ListItem name={d.name} id={d.id} />)
	let messageElement = props.stateDialogPage.messageData.map( m => <DialogMessage text={m.text} id={m.id} />)

  	return (
	    <div className={classes.dialogs}>
	    	<ul className={classes.list}>
				{ dialogsElement }
	    	</ul>
	    	<div className={classes.message_list}>
				{ messageElement }
				<div className={classes.message_list}>
					<textarea value={ props.stateDialogPage.addNewMessage } onChange={ messageTextUpdate } ref={ newMessageElement }  name="" id="" cols="30" rows="10"></textarea>
					<button onClick={ addMessage }className={classes.message__btn}>Отправить</button>
				</div>
	    	</div>
	    </div>
  	);
}

export default Dialogs;