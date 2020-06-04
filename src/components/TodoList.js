import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: crimson;

  :hover {

  }
`

const Task = styled.div`
  color: white;
  padding: 10px;
`

function TodoList ({ tasks, onItemPressed }) {
  const Elements = tasks.map(task => <Task onClick={() => onItemPressed(task.id)} key={task.id}>{task.title}</Task>)

  return (
    <Container>
      {Elements}
    </Container>
  )
}

export default TodoList
