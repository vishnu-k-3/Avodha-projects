import React,{useState} from 'react'

function Render() {
    const [val, setVal] = useState(false)
    

  return (
    <div>
      {val ? (
        <div>
            <p>Welcome</p>
            <button onClick={()=>setVal(!val)}>logout</button>
        </div>
      ) : (
        <div>
            <p>logIn first</p>
            <button onClick={()=>setVal(!val)}>login</button>
        </div>
      )}
    </div>
  )
}

export default Render
