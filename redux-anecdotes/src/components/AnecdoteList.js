import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { showNotificationWithTimeout } from '../reducers/notificationReducer'

const AnecdoteList = ({store}) => {
  return(
    <div>
      {store.getState().anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => 
              store.dispatch(vote(anecdote.id, anecdote.content),
              showNotificationWithTimeout(store.dispatch, `You voted '${anecdote.content}'`))
            }
            >vote
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList