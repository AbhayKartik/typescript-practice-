import { useState } from "react"

type User = {
    name:string,
    age:number,
    city:string
}

const UserProfile = () => {
    const [user,setUser]=useState<User>({
        name:"abhay",
        age:23,
        city:"delhi"
    })
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{user.city}</p>
      <button onClick={()=>{setUser({name:"Kartik",age:20,city:"Kanpur"})}}>Chnage User</button>
    </div>
  )
}

export default UserProfile
