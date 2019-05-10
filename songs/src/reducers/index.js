import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    { title: 'Macarena', duration: 190 },
    { title: 'All Star', duration: 210 },
    { title: 'I want it that way', duration: 140 },
    { title: 'No Scrubs', duration: 168 }
  ]
}

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
}


export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
