import React from 'react';
import "../src/assets/css/style.css";
import "./index.css"
import ReactDOM from 'react-dom/client';
import Redirect from './Redirect';
import { UserProvider } from './contexts/UserContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <UserProvider>
    <React.StrictMode>
      <Redirect />
    </React.StrictMode>
  </UserProvider>
);

