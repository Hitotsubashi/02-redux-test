import  React  from 'react';
import { connect } from 'react-redux'
import {REQUEST_EMOJIS} from '../store/action/index'

const App = (props)=>{
  const {emojis} = props
  return <div>
    <h2>emojis</h2>
    <button onClick={props.requestEmojis}>获取表情图</button>
    <br/>
    {
      Object.entries(emojis).slice(0,50).map(([key,value])=>
        <img src={value} alt={key} title={key} key={key}/>
      )
    }
  </div>
}

const mapStateToProps = (state) => ({
  emojis:state
})

const mapDispatchToProps = (dispatch) => ({
  // 加和减方法其实都是dispatch对应的action
  requestEmojis: () => dispatch(REQUEST_EMOJIS()),
})

export default  connect(mapStateToProps,mapDispatchToProps)(App)