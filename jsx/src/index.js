// import react and reactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'

// create react component
const App = () => {
  return <div>Hi there!</div>
}

// take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
