import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <React.StrictMode>
      <App /> {/* The various pages will be displayed by the `Main` component. */}
    </React.StrictMode>
  </BrowserRouter>
);