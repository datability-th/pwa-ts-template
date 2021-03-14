import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NavTop from './components/navtop'
import NotFoundComponent from './components/404'

function App(): React.ReactElement {
  return (
    <div className="App">
      <NavTop />
      <Switch>
        <Route path="/" exact component={NotFoundComponent} />
        <Route component={NotFoundComponent} />
      </Switch>
    </div>
  )
}

export default App
