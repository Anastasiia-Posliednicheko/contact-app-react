import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import {store, persistor} from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import App from "././components/App/App";
import './index.css';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
       <BrowserRouter>
         <App />
       </BrowserRouter>
     </PersistGate>
  </Provider>
  </React.StrictMode>
);

