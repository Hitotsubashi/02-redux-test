export const SET_EMOJIS=(emojis)=>({
  type:'SET_EMOJIS',
  emojis
})

// redux-promise的action creator有两种写法：
// 第一种：
export const REQUEST_EMOJIS=async()=>{
  const emojis = await fetch('https://api.github.com/emojis')
    .then(res=>res.json())
  return SET_EMOJIS(emojis)
}

// 第二种：
export const SET_EMOJIS1=()=>({
  type:'SET_EMOJIS1',
  payload:fetch('https://api.github.com/emojis').then(res=>res.json())
})