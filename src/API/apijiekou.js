//导入API接口axios封装
import api from "./api";
export let getlist=()=>{//请求数据
    return api.get("/getlist")
}
export let add= (data)=>{
    return api.post("/getlist",data)
}