import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import NewAnecdote from './components/NewAnecdote'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = (props) => {

  useEffect(() => {
    props.initializeAnecdotes()
  },[])

  return (
    <div>
      <h1>Programming anecdotes</h1>
      <Notification />
      <AnecdoteList  />
      <NewAnecdote  />
    </div>
  )
}

export default connect(null, { initializeAnecdotes })(App)
