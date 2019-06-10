import React, { Component } from 'react'

class LanguageSelector extends Component {
  render() {
    return (
      <div>Select Language:
        <i
        className="flag us"
        onClick={() => this.props.onLanguageChange('english')}
        />
        <i
        className="flag fr"
        onClick={() => this.props.onLanguageChange('french')}
        />
      </div>
    )
  }
}

export default LanguageSelector
