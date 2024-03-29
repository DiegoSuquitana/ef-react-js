/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import LogIn from './components/login.jsx';
import reportWebVitals from './reportWebVitals';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path = '/' component = {LogIn} />
            <Route path = '/tienda' component = {App} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

reportWebVitals();

