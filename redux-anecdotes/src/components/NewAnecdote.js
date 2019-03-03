import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { showNotificationWithTimeout } from '../reducers/notificationReducer'

const NewAnecdote = (props) => {

  const addAnecdote = (event) => {
    event.preventDefault()
    props.createAnecdote(event.target.anecdote.value)
    props.showNotificationWithTimeout(`You added '${event.target.anecdote.value}'`)
    event.target.anecdote.value = ''
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button type="submit">lisää</button>
      </form>
    </div>
  )
}

export default connect(
  null,
  {
    createAnecdote,
    showNotificationWithTimeout 
  }
  )(NewAnecdote)