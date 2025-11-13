type info = {
    id:number,
    name:string,
    email:string,
    city:string
}

type adminInfoList  = info&{
    adminId:number,
    role:string
}

export {type info,type adminInfoList}