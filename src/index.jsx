require('../styles/home.scss');

import React from 'react';
import {render} from 'react-dom';
import app from './reducers';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(app);

render(
  <Provider store={store}>
    <h1>Hello!</h1>
  </Provider>
  , document.getElementById('react-root'));