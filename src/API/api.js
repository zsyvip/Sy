//axios依赖
import api from 'axios';
import qs from "qs";
//二次封装axios
//1.公共部分
api.defaults.baseURL = "http://localhost:3000";//公共地址
api.defaults.timeout = 5000;//过期时间
//token令牌登录验证
//let token=JSON.parse(localStorage.getItem("token"))

//2.请求拦截
api.interceptors.request.use(
    config => {
        if (config.method=="get"||config.method=="put"){//get、put请求
            config.headers={
                "Content-type":"application/json:charset:utf8",
            }
        }else if (config.method=="post"||config.method=="delete"){//post请求
            config.headers={
                // token:"token",
                "Content-type":"application/x-www-form-urlencoded:charset:utf-8",
            }
            config.data=qs.stringify(config.data);
        }
        return config;
    },
    error => {
        let err=new Error(error);
        throw err;//抛出错误
    }
);

//3.响应拦截
api.interceptors.response.use(
    response => {
        if (response.status==200){
            return response.data;
        }else {
            return "请求失败"
        }
    },
    error => {
        let errs=new Error(error);
        throw errs;//抛出错误
    }
);

//暴露导出
export default api;
