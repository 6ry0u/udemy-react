import React, { Component } from 'react'
import { clientID } from '../.clientid.json'

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: clientID,
        scope: 'email'
      })
    })
  }

  render() {
    return (
      <div>GoogleAuth</div>
    )
  }
}

export default GoogleAuth
