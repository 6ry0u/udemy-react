import React from 'react'

const ImagesList = props => {
    const images = props.images.map(({ description, id, urls }) => {
      return <img src={urls.regular} key={id} alt={description}/>
    })
    return (
      <div>{images}</div>
    )
}

export default ImagesList
