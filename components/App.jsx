import  React  from 'react';
import { connect } from 'react-redux'
import {requestEmojis} from '../utils'

const App = (props)=>{
  const {emojis} = props
  return <div>
    <h2>emojis</h2>
    <button onClick={requestEmojis}>获取emojis</button><br/>
    {
      Object.entries(emojis)
        .slice(0,50)
        .map(([key,value])=>
          <img src={value} alt={key} title={key} key={key}/>
        )
    }
  </div>
}

const mapStateToProps = (state) => ({
  emojis:state
})

export default  connect(mapStateToProps,null)(App)