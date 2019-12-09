import React from 'react';
import classes from './Posts.module.css';
import Post from './post/Post.jsx';

const Posts = (props) => {
	
	let postsElement = props.stateProfilePage.postsData.map( (p) => <Post like={p.like} text={p.text} /> )
  	return (
	    <div className={classes.list_posts}>
	    	{ postsElement }
	    </div>
  	);
}

export default Posts;