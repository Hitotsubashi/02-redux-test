import  React  from 'react';

const App = (props)=>{
  const {emojis} = props
  return <div>
    {
      Object.entries(emojis).map(([key,value])=>{
        <img src={value} alt={key} title={key}/>
      })
    }
  </div>
}

