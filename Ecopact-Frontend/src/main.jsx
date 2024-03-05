import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { ProSidebarProvider } from 'react-pro-sidebar';
import {Provider} from 'react-redux'
import './index.css'
import store from './store.js';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <ProSidebarProvider>
        <App />
      </ProSidebarProvider>
      </Provider>
    </BrowserRouter>
    
  </React.StrictMode>
);
