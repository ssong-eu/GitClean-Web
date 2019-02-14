import React from 'react'
import { Menu } from 'semantic-ui-react'
import Auth from './Auth.js'

const auth = new Auth()

export default class Main extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Menu>
          {
            auth.isAuthenticated() === false // issue with redirection and fetching localStorage data.
              ? <Menu.Item onClick={auth.login}>Log In</Menu.Item>
              : <Menu.Item onClick={auth.logout}>Log Out</Menu.Item>
          }
        </Menu>
      </React.Fragment>
    )
  }
}
