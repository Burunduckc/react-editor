import React from 'react';
import ReactDOM from 'react-dom/client';
//redux
import {Provider} from "react-redux";
import {store} from "./redux/store";
//UI
import App from './components/App/App';
//styles
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);
