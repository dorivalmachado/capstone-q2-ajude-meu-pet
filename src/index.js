import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Providers from './Providers';
import { Toaster } from 'react-hot-toast';

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <Toaster/>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);

