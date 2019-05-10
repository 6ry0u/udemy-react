import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

class SongsList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      const { title, duration } = song
      return (
        <div className="item" key={title}>
          <div className="right floated content">
            <button
              className="name ui primary"
              onClick={() => this.props.selectSong(song)}
              >Select</button>
          </div>
          <div className="content">{`${title} ${duration} seconds`}</div>
        </div>
      )
    })
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>
  }
}

// Convention name
const mapStateToProps = (state) => {
  return { songs: state.songs }
}

export default connect(
  mapStateToProps,
  { selectSong }
)(SongsList)
