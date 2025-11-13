
import { useState } from 'react'
import './App.css'
import Button from './Button'
import UserInfo from './UserInfo'
import AdminInfo from './AdminInfo'
import {type info,type adminInfoList} from "./types"
function App() {
 const [count , setCount] = useState(0)
 const user:info ={
  id:1,
  name:"abhay",
  email:"abhay@gmail.com",
  city:"delhi"

 }

 const admin:adminInfoList ={
  id:1,
  name:"abhay",
  email:"abhay@gmail.com",
  city:"delhi",
  adminId:123,
  role:"CEo"
 }

  return (
    <>
    <h1>{count}</h1>
      <Button label="tsx btn" onClick={()=>setCount(count+1)} disabled={true} />
       <UserInfo user={user}/>
       <AdminInfo admin={admin}/>
    </>
  )
}

export default App
