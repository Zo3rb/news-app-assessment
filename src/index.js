import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // The Application Starting Point

// External Imports
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// Internal Imports
import reduxStore from './redux/reduxStore';

ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
