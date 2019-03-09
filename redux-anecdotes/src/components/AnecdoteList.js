import React from 'react'
import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { showNotificationWithTimeout } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  console.log(props.anecdotes)

  const voteClicked = (value) => {
    props.vote(value.id)
    props.showNotificationWithTimeout(`You voted '${value.content}'`, 10)
  }
  
  return(
    <div>
      {props.anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {JSON.stringify(anecdote.content)}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteClicked(anecdote)}
            >vote
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes
  }
}

const mapDispatchToProps = {
  vote, 
  showNotificationWithTimeout,
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps 
  )(AnecdoteList)
