import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE':
      const id = action.data.id
      const changedAnecdote = action.data
      return state
      .map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
      .sort((a, b) => b.votes - a.votes)

  default: return state
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export const vote = (id) => {
  
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    const anecdoteToChange = anecdotes.find(a => a.id === id)
    const changedAnecdote = { ...anecdoteToChange, votes: anecdoteToChange.votes + 1}
    const newAnecdote = await anecdoteService.update(changedAnecdote)
    dispatch({
      type: 'VOTE',
      data: newAnecdote,
    })
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: {
        content: newAnecdote.content,
        votes: 0,
        id: newAnecdote.id
      }
    })
  }
}


export default anecdoteReducer