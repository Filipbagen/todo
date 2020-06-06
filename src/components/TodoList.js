import React from 'react'
import styled from 'styled-components'
import Task from './components/Task'

const Container = styled.div`
  background-color: crimson;

  :hover {

  }
`

function TodoList ({ tasks, onItemPressed }) {
  const Elements = tasks.map(task => <Task onClick={() => onItemPressed(task.id)} key={task.id} taks={task} />)

  return (
    <Container>
      {Elements}
    </Container>
  )
}

export default TodoList
