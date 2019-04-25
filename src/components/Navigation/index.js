import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Nav, NavItem, Button } from 'shards-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './style.css';

// Route pages
import Discover from '../Discover';
import CreateRecipe from '../CreateRecipe';

const routes = [
  {
    name: "Discover",
    path: "/",
    exact: true,
    main: Discover
  },
  {
    name: "Create Recipe",
    path: "/create-recipe",
    exact: false,
    main: CreateRecipe
  }
]


class Navigation extends Component {
  showSettings (event) {
    event.preventDefault();
    console.log('pressed')
  }

  render() {
    return (
      <Router>
        <div>
          <Menu className="sidebarNav">
            <h3 className="sidebarTitle">{this.props.user.name}</h3>
            <Nav vertical className="sidebarContainer">
              {routes.map((route, index) => (
                <NavItem key={index} className="navListItem">
                  <Link className="sidebarLink" to={route.path}>{route.name}</Link>
                </NavItem>
              ))}
            </Nav>
            <Button outline theme="danger" onClick={this.props.signOut} className="sidebarSignOut">Sign Out</Button>
          </Menu>

          {/* Read main view */}
          <main className="page">
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </main>
        </div>
      </Router>
    )
  }
}

export default Navigation;
