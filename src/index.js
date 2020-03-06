import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import toDoListReducer from './redux/reducers/toDoListReducer';


const store = createStore(toDoListReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


