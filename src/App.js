import React, { useState } from 'react'
import './style/App.css'
import { v4 as uuidv4 } from 'uuid'
import TodoList from './components/TodoList'

function App () {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const add = function () {
    if (input === '') { return }

    const newObject = {
      id: uuidv4(),
      title: input
    }

    setTodos([...todos, newObject])
    setInput('')
  }

  const deleteTodo = (id) => {
    const newState = todos.filter(todo => todo.id !== id)
    setTodos(newState)
  }

  const onInput = (e) => {
    setInput(e.target.value)
  }

  const onKeyPressed = (e) => {
    console.log(e.key)
    if (e.key === 'Enter') {
      add()
    }
  }

  return (
    <div className='App' onKeyDown={onKeyPressed}>
      <TodoList tasks={todos} onItemPressed={deleteTodo} />
      <button onClick={add}>Add</button>
      <input value={input} onChange={onInput} type='text' />
    </div>
  )
}

export default App
