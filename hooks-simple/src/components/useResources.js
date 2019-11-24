import { useState, useEffect } from 'react'
import axios from 'axios'

const useResources = (resource) => {
  const [resources, setResources] = useState([])

  // useEffect doesn't support promises. Resources fetching
  // function must be defined ouside or invoked immediately
  const fetchResources = async (resource) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
    setResources(response.data)
  }

  useEffect(() => {
    fetchResources(resource)
  }, [resource])

  return resources
}

export default useResources
