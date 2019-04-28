// import react and reactDOM libraries
import React from "react"
import ReactDOM from "react-dom"

const buttonText = 'Click on me'
// create react component
const App = () => {
  return (
    <div>
      <label className="label" htmlFor="name">Enter name:</label>
      <input id="name" type="text"/>
      <button style={{backgroundColor:'blue', color: 'white'}}>{buttonText}</button>
    </div>
  )
}

// take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"))
