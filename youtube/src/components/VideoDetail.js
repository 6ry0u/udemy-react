import React from 'react'

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>
  } else {
    const {
      id: { videoId },
      snippet: { description, title }
    } = video
    return (
      <div>
        <div className="ui embed">
          <iframe title="video player" src={`https://www.youtube.com/embed/${videoId}`} frameBorder="0"></iframe>
        </div>
        <div className="ui segment">
          <h4 className="ui header">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    )

  }
}

export default VideoDetail
