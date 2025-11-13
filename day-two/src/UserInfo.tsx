import {type info} from './types'

type userInfoProps = {
  user :info
}

const UserInfo : React.FC<userInfoProps> = ({user}) => {
  return (
    <div>
      <h1>User id :{user.id} </h1>
      <p>name : {user.name}</p>
      <p>Email : {user.email}</p>
      <p>city : {user.city}</p>
    </div>
  )
}

export default UserInfo
