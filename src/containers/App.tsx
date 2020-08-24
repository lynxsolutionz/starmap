import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from 'pages/Home'
import About from 'pages/About'

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path='/about' component={About}></Route>
      </Switch>
    </Router>
  )
}

export default App