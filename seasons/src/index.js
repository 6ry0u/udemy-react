import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Loader from './Loader'

import './index.css'

const App = () => {
  const [lat, setLat] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setError(err.message)
    )
  }, [])

  const renderContent = () => {
    if (error && !lat) {
      return <div>Error: {error}</div>
    } else if (!error && lat) {
      return <SeasonDisplay lat={lat} />
    } else {
      return <Loader message='Waiting for user to allow or block fetching location' />
    }
  }

  return (
    <div className='red border'>{renderContent()}</div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
