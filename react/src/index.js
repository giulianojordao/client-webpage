import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

import Store from './store/store';
import InitialState from './initialState';

const storeInstance = Store(InitialState)

ReactDOM.render(
  <Provider store={storeInstance}>
    <App /> 
  </Provider>, 
  document.getElementById('root'));
  
  registerServiceWorker();
