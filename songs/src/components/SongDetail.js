import React from 'react'
import { connect } from 'react-redux'

const SongDetail  = ({ song }) => {
  if (song) {
    const { duration, title } = song
    return (
      <div>
        <h3>Details for:</h3>
        <p>Title: {title}</p>
        <p>Duration: {duration}</p>
      </div>
    )
  }
  return <div>Select a song</div>
}

const mapStateToProps = (state) =>{
  return { song: state.selectedSong }
}


export default connect(mapStateToProps)(SongDetail)
