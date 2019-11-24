import React, { useState } from 'react'
import { Button, Container, Segment } from 'semantic-ui-react'

import ResourcesList from './ResourcesList'

const App = () => {
  const [resource, setResource] = useState('posts')
  return (
    <Container>
      <Segment textAlign='center'>
        <h1>Show Todos or Posts</h1>
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
      </Segment>
      <ResourcesList resource={resource} />
    </Container>
  )
}

export default App
