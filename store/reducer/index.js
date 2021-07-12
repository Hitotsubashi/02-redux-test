const reducer = (state,action)=>{
  switch (action.type) {
    // 处理第一种action creator
    case 'SET_EMOJIS':
      return action.emojis
    // 处理第二种action creator
    case 'SET_EMOJIS1':
      return action.payload
    default:
      return state
  }
}

export default reducer