import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TaskBoard from './containers/TaskBoard';
import { Provider } from 'react-redux';
import { Store } from './store/configStore';
import Main from './containers/Main';
import LogIn from './containers/Login';

function App() {
  return (
    <Provider store = {Store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={LogIn}/>
          <Route  path='/' component={Main}/>
        </Switch>
      </BrowserRouter>
      {/* <Main/>
      <LogIn/> */}
    </Provider>
  );
}

export default App;
