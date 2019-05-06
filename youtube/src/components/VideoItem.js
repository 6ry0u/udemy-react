import React from 'react'
import './VideoItem.css'

const VideoItem = ({ onVideoSelect, video }) => {
  const {
    snippet: {
      title,
      thumbnails: { medium: { url } }
    }
  } = video

  return (
    <div onClick={() => onVideoSelect(video)} className="item video-item">
      <div className="ui tiny image">
        <img src={url} alt={title}/>
      </div>
      <div className="middle aligned content">
        <div className="header">{title}</div>
      </div>
    </div>
  )
}

export default VideoItem
