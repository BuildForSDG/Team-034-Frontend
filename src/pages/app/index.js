import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from '../../Store';
import HomePage from '../homepage';
import AboutPage from '../about';
import ContactPage from '../contact';
import Dashboard from '../dashboard';
import LoginPage from '../login';
import RegisterPage from '../register';

const App = () => {
  return (
    <>
      <Provider store={Store()}>
        <BrowserRouter basename="/">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
