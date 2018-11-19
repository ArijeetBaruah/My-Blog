import React, { Component, Suspense } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './NavBar';

const Home = React.lazy(() => import('./home'));

const Loading = () => (<div>Loading...</div>);

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Provider>
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                component={() => (
                  <Suspense fallback={<Loading />}>
                    <Home />
                  </Suspense>
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
