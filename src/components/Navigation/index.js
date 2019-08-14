import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Nav, NavItem } from 'shards-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import SignOut from '../../core/components/SignOut'
import './style.css'

class Navigation extends Component {
  render() {
    const { user, routes } = this.props

    return (
      <Router>
        <div>
          <Menu disableAutoFocus className="sidebarNav">
            <h3 className="sidebarTitle">{user.name}</h3>
            <Nav vertical className="sidebarContainer">
              {routes.map((route, index) => {
                return (
                  <NavItem key={index} className="navListItem">
                    <Link className="sidebarLink" to={route.path}>
                      <img src={route.icon} alt={route.name} />
                    </Link>
                  </NavItem>
                )
              })}
            </Nav>
            <SignOut />
          </Menu>

          {/* Read main view */}
          <main className="page">
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              )
            })}
          </main>
        </div>
      </Router>
    )
  }
}

export default Navigation
