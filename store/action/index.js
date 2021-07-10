export const SET_EMOJIS=(emojis)=>({
  type:'SET_EMOJIS',
  emojis
})

export const REQUEST_EMOJIS = ()=>dispatch => (
  fetch('https://api.github.com/emojis')
    .then((res)=>res.json())
    .then(emojis => dispatch(SET_EMOJIS(emojis)))
)