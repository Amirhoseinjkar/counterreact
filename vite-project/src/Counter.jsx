import { useReducer } from "react"
import './counter.css'

const reducer = function(state,action){
  switch (action.type) {
    case 'decrement':
      return {count:state.count -1}
      
     
      case 'increment':
      return {count: state.count+1}
  case 'reset':
     return  {count:0}

    default:
      return state
      
  }
}


export function Counter(){

const [state,dispatch] = useReducer(reducer, {count:0})


  
  return(
    <>
    <div className="container">

      <div>
         <h1 style={{color:state.count<0?'red':'rgb(165, 161, 161)'}}>{state.count}</h1>
      </div>
      <div>
        <button className="last"
        onClick={()=>{
          dispatch({type:'decrement'})
        }}
        
        >←</button>
        <button onClick={()=>{
         dispatch({type:"reset"})
        }}>reset</button>
        <button className="next"
        onClick={()=>{
          dispatch({type:"increment"})
        }}
        >→</button>

      </div>
    </div>
    
    </>
  )
}