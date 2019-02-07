import React from 'react'
import { Button } from 'semantic-ui-react'
import Auth from './Auth.js'

const auth = new Auth()

export default class Main extends React.Component {
  render () {
    return (
      <React.Fragment>
        {auth.login()}
      </React.Fragment>
    )
  }
}
