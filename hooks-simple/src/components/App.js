import React, { useState } from 'react'
import { Button, Container, Segment } from 'semantic-ui-react'

import ResourcesList from './ResourcesList'
import UsersList from './UsersList'

const App = () => {
  const [resource, setResource] = useState('posts')
  return (
    <Container>
      <Segment textAlign='center'>
        <h1>Show:</h1>
        <Button
          onClick={() => setResource('posts')}
        >
        Posts
        </Button>
        <Button
          onClick={() => setResource('todos')}
        >
        Todos
        </Button>
        <Button
          onClick={() => setResource('users')}
        >
        Users
        </Button>
      </Segment>
      {resource === 'users'
        ? <UsersList resource={resource} />
        : <ResourcesList resource={resource} />}
    </Container>
  )
}

export default App
