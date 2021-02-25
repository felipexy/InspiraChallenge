import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Options from './pages/options';
import CardInfo from './pages/cardInfo';
import Summary from './pages/summary';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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

reportWebVitals();
