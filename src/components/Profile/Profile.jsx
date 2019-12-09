import React from 'react';
import s from './Profile.module.css';
import Posts from './posts/Posts.jsx';
import {addPostActionCreator, onchangeTextActionCreator} from '../../redux/state';

const Profile = (props) => {

	let newPostElement = React.createRef();


	let addPost = () => {
		props.dispatch(addPostActionCreator());
	}

	let onchangeText = () => {
		let text = newPostElement.current.value;
		props.dispatch(onchangeTextActionCreator(text));
	}
	
  return (
    <div className={s.profile}>
	    <div className={s.bg}>
			<img src="http://www.grynevich.com/wp-content/uploads/2016/04/projet-1.6.jpg.pagespeed.ce.vg4xOGljKT.jpg"/>
		</div>
		<div className={s.info_wrapper}>
			<div className={s.avatar}>
				<img src="https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png" alt=""/>
			</div>
			<div className={s.info}>
				<h1 className={`${s.name} ${s.nameTest}`}>Yuriy</h1>
			</div>
		</div>
		<div className={s.add_post}>
			<div className={s.add_post_title}>My post</div>
			<textarea value={props.stateProfilePage.newPostAdd} onChange={ onchangeText } ref={newPostElement} className={s.add_post_message} name="" id="3" cols="30" rows="10"></textarea>
			<button onClick={ addPost } className={s.add_post_btn}>Add post</button>
		</div>

		<Posts stateProfilePage={props.stateProfilePage}/>
    </div>
  );
}

export default Profile;