import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
  // not required by React
  constructor(props) {
    super(props) // pass props to Component parent class constructor

    // init state
    this.state = { lat: null }
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // UPDATE SET WITH SETSTATE
        this.setState({ lat: position.coords.latitude })
      }, // success callback
      err => console.log(err)
    )
  }


  // Required by React
  render() {
    return (
      <div>Latitude: {this.state.lat}</div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
