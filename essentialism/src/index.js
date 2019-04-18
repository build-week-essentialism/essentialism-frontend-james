import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// middleware
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// reducers
import {
	UsersReducer
} from './store/reducers/index.js';

const rootReducer = combineReducers({
	users: UsersReducer
});

// store
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
	<Provider store = { store }>
		<Router>
			<Route path = '/' component = { App } />
		</Router>
	</Provider>,
	document.getElementById('root')
);

