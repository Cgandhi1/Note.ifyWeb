import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import HomePage from './containers/HomePage/HomePage';
import AddArtistsPage from './containers/AddArtistsPage/AddArtistsPage';
import NavBar from './components/NavBar/NavBar';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/Artists" component={AddArtistsPage} />
				</Switch>
				<div id="stars" />
			</div>
		);
	}
}

export default App;
//<Route exact path='/About' component={About}></Route>
//<Route exact path='/Contact' component={Contact}></Route>
//<Route exact path='/Register' component={Register}></Route>
//<Route exact path='/LogIn' component={LogIn}></Route>
//<Route exact path='/ForgotPassword' component={ForgotPassword}></Route>
//<Route exact path='/Artists' component={AddArtistPage}></Route>
