import React from 'react';
import NewAnecdote from './components/NewAnecdote'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'

const App = (props) => {

  return (
    <div>
      <h1>Programming anecdotes</h1>
      <Notification />
      <AnecdoteList  />
      <NewAnecdote  />
    </div>
  )
}

export default App
