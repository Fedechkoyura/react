import React from 'react';
import './App.css'
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx';
import { Route } from 'react-router-dom';

const App = (props) => {
	
  return (
	    <div className='app'>
	      <Header />
	      <Navbar />
	      <div className="app_content">
			<Route path="/dialogs" render={ () => <Dialogs dispatch={props.dispatch} stateDialogPage={props.state.dialogsPage} />}/>
			<Route path="/profile" render={ () => <Profile dispatch={props.dispatch} stateProfilePage={props.state.profilePage} /> }/>
			<Route path="/news" component={News}/>
	      </div>
	    </div>
  );
};

export default App;