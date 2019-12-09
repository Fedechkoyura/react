import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import {addPost} from './redux/state';
import {updateNewPostText} from './redux/state';
import { BrowserRouter } from 'react-router-dom';

export let reRenderEntireTree = (state) => {
	ReactDom.render(
		<BrowserRouter>
			<App updateNewPostText={updateNewPostText} addPost={addPost} state={state} />
		</BrowserRouter>, document.getElementById('root'));

};