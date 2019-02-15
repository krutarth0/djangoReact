import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

import {createStore,compose,applyMiddleware} from 'redux'
import reducer from './store/reducers/auth'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

//import * as serviceWorker from './serviceWorker';
const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store =createStore(reducer,composeEnhances(
  applyMiddleware(thunk)
) )


const app=(
  <BrowserRouter>
  <Provider store={store}>
          <App />
  </Provider>
  </BrowserRouter>

)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
