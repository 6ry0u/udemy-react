import React, { Component } from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/languageContext'
import ColorContext from '../contexts/colorContext'

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
        <ColorContext.Provider
        value="red">
          <LanguageContext.Provider
          value={this.state.language}
          >
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    )
  }
}

export default App
