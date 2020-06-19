import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import AccountProfile from './components/AccountProfile'
import NavBar from './components/NavBar'
import AccountProfileContext from './components/AccountProfileContext';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path='/' render={() => <div>Home</div>} />
          <Route exact path='/account/profile' component={AccountProfile} />
          <Route exact path='/context' component={AccountProfileContext} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
