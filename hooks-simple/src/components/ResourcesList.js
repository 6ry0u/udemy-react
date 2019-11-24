import React, { useState, useEffect } from 'react'
import { Item, Container } from 'semantic-ui-react'
import axios from 'axios'

const ResourcesList = ({ resource }) => {
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

  return (
    <Container>
      <Item.Group divided>
        {resources.map(record => (
          <Item key={record.id}>
            <Item.Content verticalAlign='middle'>
              {record.title}
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Container>
  )
}

export default ResourcesList
