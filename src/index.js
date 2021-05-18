import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes'
import {Provider} from "react-redux"
import './index.css'

ReactDOM.render(
  <Provider>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

