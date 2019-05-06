import React from 'react'

const VideoItem = ({
  video: {
    snippet: {
      title,
      description,
      thumbnails: { medium: { url } }
    }
  }
}) => {
  return (
    <div className="ui divided items">
      <div className="item">
        <div className="ui tiny image">
          <img src={url} alt={title}/>
        </div>
        <div className="middle aligned content">
          {description}
        </div>
      </div>
    </div>
  )
}

export default VideoItem
