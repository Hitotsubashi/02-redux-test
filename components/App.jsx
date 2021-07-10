import  React  from 'react';
import { connect } from 'react-redux'

const App = (props)=>{
  const {emojis} = props
  return <div>
    <h2>emojis</h2>
    {
      Object.entries(emojis).map(([key,value])=>{
        <img src={value} alt={key} title={key}/>
      })
    }
  </div>
}

const mapStateToProps = (state) => ({
  emojis:state
})

export default  connect(mapStateToProps,null)(App)