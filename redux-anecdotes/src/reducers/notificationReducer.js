const initialState=('Welcome!')

const notificationReducer = (state=initialState, action) => {
    switch (action.type) {
      case 'SHOW_NOTIFICATION':
        return action.data
      case 'HIDE_NOTIFICATION':
        return initialState
      default: 
        return state
    }
}

export const showNotificationWithTimeout = (text, time) => {
  return async dispatch => {
    console.log('time', time)
    const ms = time * 1000

    dispatch({
      type: 'SHOW_NOTIFICATION', 
      data: text,
    })
  
    setTimeout(() => {
    dispatch({
      type: 'HIDE_NOTIFICATION', 
    })
    }, ms)   
  }
}

export default notificationReducer