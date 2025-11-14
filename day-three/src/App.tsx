import { useState } from "react"
import UserProfile from "./UserProfile"

function App() {

const [count ,setCount] = useState(0)
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>{setCount(count+1)}}>Increament</button>
     <UserProfile/>
    </>
  )
}

export default App
