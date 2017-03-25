import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import HangPage from './Hang'
import AuthPage from './Auth'
import CoinPage from './CoinToss'

const App = () =>
  <div>
    <h1>App</h1>
    <Nav />
    <Switch>
      <Route exact render={() => <HangPage />} path={'/hang'} />
      <Route exact render={() => <CoinPage />} path={'/coin'} />
      <Route exact render={() => <AuthPage />} path={'/auth'} />
    </Switch>
  </div>

export default App
