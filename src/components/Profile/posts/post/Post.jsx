import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.post}>
	    <div className={classes.avatar}>
			<img src="https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png" alt=""/>
	    </div>
	    <div className={classes.post_message}>
		    <div className={classes.post_text}>{props.text}</div>
		    <span className={classes.post_like}>like: <i>{props.like}</i></span>
	    </div>
    </div>
  );
}

export default Post;