import { type adminInfoList } from "./types"

type AdminInfoProp = {
  admin :adminInfoList
}
const AdminInfo : React.FC<AdminInfoProp> = ({admin}) => {
  return (
    <div>
       <h1>User id :{admin.id} </h1>
      <p>name : {admin.name}</p>
      <p>Email : {admin.email}</p>
      <p>city : {admin.city}</p>
      <p>Admin id : {admin.adminId}</p>
      <p>Admin role : {admin.role}</p>
    </div>
  )
}

export default AdminInfo
