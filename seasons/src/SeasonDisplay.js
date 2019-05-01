import './SeasonDisplay.css'
import React from 'react'

// config object
const seasonConfig = {
  summer: {
    text: 'Lets it the beach',
    icon:'massive sun icon'
  },
  winter: {
    text: 'Burr, it is chilly',
    icon: 'massive snowflake icon'
  }
}

// helper function
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

// functional component
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth())
  const { text, icon } = seasonConfig[season]

  return (
    <div className={`${season} season-display`}>
      <i className={`icon-left ${icon}`} />
      <h1>{text}</h1>
      <i className={`icon-right ${icon}`} />
    </div>
  )
}

export default SeasonDisplay
