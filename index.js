import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import App from './components/app.js';  


const store = createStore(
    allReducers,
    //applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
	<Provider store={''}>
        <App />
    </Provider>, 
	document.getElementById('app')

);