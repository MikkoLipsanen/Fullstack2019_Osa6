const initialState=('Welcome!')

const notificationReducer = (state=initialState, action) => {
    switch (action.type) {
      case 'SHOW_NOTIFICATION':
        return action.text
      case 'HIDE_NOTIFICATION':
        console.log(nextNotificationId)
        console.log(action.id)
        if (nextNotificationId === action.id)
          return initialState
        return state
      default: 
        return state
    }
}

function showNotification(text) {
    return { type: 'SHOW_NOTIFICATION', text }
  }
  function hideNotification(id) {
    return { type: 'HIDE_NOTIFICATION', id }
  }
  
  let nextNotificationId = 0

  export function showNotificationWithTimeout(dispatch, text) {
    nextNotificationId++
    const id = nextNotificationId
    dispatch(showNotification(text))
  
    setTimeout(() => {
      dispatch(hideNotification(id))
    }, 5000)
  }

export default notificationReducer