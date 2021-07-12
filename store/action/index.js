export const SET_EMOJIS=(emojis)=>({
  type:'SET_EMOJIS',
  emojis
})

export const REQUEST_EMOJIS=async()=>{
  const emojis = await fetch('https://api.github.com/emojis')
    .then(res=>res.json())
  return SET_EMOJIS(emojis)
}