import React, { Component } from 'react'
// import { slide as Menu } from 'react-burger-menu'
// import { Nav, NavItem } from 'shards-react'
import { Route, Switch, withRouter } from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose'

// import SignOut from '../../core/components/SignOut'
import Background from './components/Background'
import Button from './components/Button'
import styles from './style.module.css'

const RoutesContainer = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
})

class Navigation extends Component {
  render() {
    const { routes, location } = this.props

    return (
      <div>
        <div className={styles.navigation}>
          <Background />

          <PoseGroup>
            {routes.map((route, key) => {
              return <Button key={key} route={route} />
            })}
          </PoseGroup>
        </div>

        <main>
          <PoseGroup>
            <RoutesContainer key={location.key}>
              <Switch location={location}>
                {routes.map((route, index) => {
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      component={route.component}
                    />
                  )
                })}
              </Switch>
            </RoutesContainer>
          </PoseGroup>
        </main>
      </div>
    )
  }
}

export default withRouter(Navigation)
