import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';

import Login from './login/containers/logincontainer';
import Chat from './chat/containers/chatcontainers'

import './index.css';
import * as serviceWorker from './serviceWorker';
import { persistor, store } from './store';

const PrivateRoute = ({component: Component, ...rest}) => {

  const State = store.getState();

  return (
      <Route {...rest} render={props => (
          (State?.loginState.login === 'success') ?
              <Component {...props} />
          : <Redirect to={'/'}/>
      )} />
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Switch>
            <PrivateRoute path={'/chat'} component={Chat}/>
            <Route path={'/'} component={Login}/>
          </Switch>
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
