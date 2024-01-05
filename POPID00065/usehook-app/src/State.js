import React,{useState, useEffect} from 'react'

function State() {
    const [count, setCount] = useState(2)
    const [count1, setCount1] = useState(0)

    useEffect(()=>{
        console.log("mounting...")
    },[count1])
  return (
    <div>
      <h3>count is {count}</h3>
      <h3>count is {count1}</h3>
      <button onClick={()=>{setCount(count * count)}}>Click Me</button>
      <button onClick={()=>{setCount1(count1 + 1)}}>Click Me</button>
    </div>
  )
}

export default State
