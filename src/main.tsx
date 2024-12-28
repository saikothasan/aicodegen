import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // This should match the default export of App
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
