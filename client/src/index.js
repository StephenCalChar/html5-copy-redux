import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/Index.js';

import configureStore from './store/Index.js';
//const store = configureStore({ example: { name: 'Joe Bloggs' }});
//const store = configureStore({ example: { name: 'Joe Bloggs' }});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
