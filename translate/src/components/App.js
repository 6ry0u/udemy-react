import React, { Component } from 'react'
import UserCreate from './UserCreate'

class App extends Component {
  state = { language: 'english' }

  onLanguageChange = language => {
    this.setState({ language })
  }

  render() {
    return (
      <div className="ui container">
        <div>Select Language:
          <i
          className="flag us"
          onClick={() => this.onLanguageChange('english')}
          />
          <i
          className="flag fr"
          onClick={() => this.onLanguageChange('french')}
          />
        </div>
        <UserCreate />
      </div>
    )
  }
}

export default App
