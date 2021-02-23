import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Options from './pages/options';
import CardInfo from './pages/cardInfo';
import Summary from './pages/summary';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store/index'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Route path="/options" component={Options} />
        <Route path="/cardInfo" component={CardInfo} />
        <Route path="/summary" component={Summary} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
