import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import Home from './home'
import About from './about'
import Post from './post'

function App() {
  return (
    <Router>
      <nav className="bg-gray-800">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <NavLink
            exact
            to="/"
            className="text-xl font-bold text-gray-100 hover:text-gray-300"
            activeClassName="text-gray-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-xl font-bold text-gray-100 hover:text-gray-300"
            activeClassName="text-gray-300"
          >
            About
          </NavLink>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/posts/:id" component={Post} />
      </Switch>
    </Router>
  )
}

export default App
