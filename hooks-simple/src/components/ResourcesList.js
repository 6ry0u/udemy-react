import React from 'react'
import { Item, Container } from 'semantic-ui-react'

import useResources from './useResources'

const ResourcesList = ({ resource }) => {
  const resources = useResources(resource)
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
