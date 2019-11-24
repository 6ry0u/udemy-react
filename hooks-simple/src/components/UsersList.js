import React from 'react'
import { Card, Container } from 'semantic-ui-react'

import useResources from './useResources'

const { Group, Header, Meta, Description, Content } = Card
const ResourcesList = ({ resource }) => {
  const resources = useResources(resource)
  return (
    <Group centered>
      {resources.map(({ id, username, email, name }) => (
        <Card key={id}>
          <Content>
            <Header>{username}</Header>
            <Meta>{email}</Meta>
            <Description>{name}</Description>
          </Content>
        </Card>
      ))}
    </Group>
  )
}

export default ResourcesList
