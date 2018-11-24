import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBarContainer from '../container/navbar';
import store from '../store';
import Home from './home';
import Login from '../container/login';
import ProjectDetail from './project_detail';
import SignUp from '../container/signup';
import firebase from '../util/firebase';

class App extends Component {
  constructor(props){
    super(props);
    firebase.askForPermissionToReceiveNotifications()
      .then((token) => {
        firebase.sendMessage({
          notification: {
            body: "Thanks to Register!"
          },
          to: token,
        });
      }).catch(error => console.error(error));
  }

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
              <Route
                path="/register"
                component={() => (
                  <>
                    <NavBarContainer />
                    <SignUp />
                  </>
                )}
                />
              <Route
                path="/project/:id"
                component={(props) => (
                  <>
                    <NavBarContainer />
                    <ProjectDetail
                      goBack={props.history.goBack}
                      id={props.match.params.id} />
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
