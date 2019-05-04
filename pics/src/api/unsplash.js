import axios from 'axios'
import clientID from './.unsplash-api-key.json'

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: { Authorization: `Client-ID ${clientID.clientID}` }
})
