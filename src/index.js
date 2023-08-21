import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>  
    <App/>
  </React.StrictMode>
);

//ojo con esto que provoca que se renderice todo dos veces. Por eso esta bodle el fetch mas alla del useEffect