import store from '../store'
import {SET_EMOJIS} from '../store/action'

export function requestEmojis(){
  fetch('https://api.github.com/emojis')
    .then(res=>res.json())
    .then(emojis=>store.dispatch(SET_EMOJIS(emojis)))
}