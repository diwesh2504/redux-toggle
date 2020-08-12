import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import {Provider} from 'react-redux';
import {todoReducer} from './reducers/todoReducer'
import {createStore,combineReducers} from 'redux';
import { facebookReducer } from './reducers/facebookReducer';
const reducer=combineReducers({
  todos:todoReducer,
  status:facebookReducer
})
const store=createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

