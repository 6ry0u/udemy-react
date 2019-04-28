import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
  // not required by React
  constructor(props) {
    super(props) // pass props to Component parent class constructor

    // init state
    this.state = { lat: null, errMessage: '' }
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // UPDATE SET WITH SETSTATE
        this.setState({ lat: position.coords.latitude })
      }, // success callback
      err => this.setState({errMessage: err.message})
    )
  }


  // Required by React
  render() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error: {this.state.errMessage}</div>
    } else if (!this.state.errMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    } else {
      return <div>Loading...</div>
    }
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
