import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './Components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </Provider>,
);
