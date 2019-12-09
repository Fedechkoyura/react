import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import store from './redux/state';
import * as serviceWorker from './serviceWorker';

let rerenderEntireTree = (state) => {
	ReactDom.render(
		<BrowserRouter>
			<App  dispatch={store.dispatch.bind(store)} state={store.getState()} />
		</BrowserRouter>, document.getElementById('root'));

};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

serviceWorker.unregister();