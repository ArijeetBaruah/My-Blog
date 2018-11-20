import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBarContainer from '../container/navbar';
import store from '../store';
import Home from './home';
import Login from '../container/login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                component={() => (
                  <>
                    <NavBarContainer />
                    <Home />
                  </>
                )}
                />
              <Route
                path="/login"
                component={() => (
                  <>
                    <NavBarContainer />
                    <Login />
                  </>
                )}
                />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
