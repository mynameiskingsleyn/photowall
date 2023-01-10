import React from 'react';
import ReactDOM from 'react-dom';
//import Main from './Components/Main';
import './styles/stylesheet.css';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducer';
import {Provider} from 'react-redux';

import App from './Components/App';
import {database} from './database/config';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
applyMiddleware(thunk))


ReactDOM.render(<Provider store={store}><Router><App/></Router></Provider>, document.getElementById('root'));
