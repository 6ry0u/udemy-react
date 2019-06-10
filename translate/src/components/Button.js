import React, { Component } from 'react'
import LanguageContext from '../contexts/languageContext'
import ColorContext from '../contexts/colorContext'

class Button extends Component {
  renderButton(color) {
    return (
      <button className={`ui button ${color}`}
      >
        <LanguageContext.Consumer
        >
          {value => value === 'english' ? 'Submit' : 'Soumettre'}
        </LanguageContext.Consumer>
      </button>
    )
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    )
  }
}

export default Button
