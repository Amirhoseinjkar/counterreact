import { useState } from "react"
import './counter.css'
export function Counter(){
  let [count,setCount] = useState(0)


  
  return(
    <>
    <div className="container">

      <div>
         <h1 style={{color:count<0?'red':'rgb(165, 161, 161)'}}>{count}</h1>
      </div>
      <div>
        <button className="last"
        onClick={()=>{
          return setCount(count -1)
        }}
        
        >←</button>
        <button onClick={()=>{
          setCount(0)
        }}>reset</button>
        <button className="next"
        onClick={()=>{
          return setCount(count + 1)
        }}
        >→</button>

      </div>
    </div>
    
    </>
  )
}