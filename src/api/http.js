import axios from "axios"

// axios.interceptors.request.use(

// )

axios.interceptors.response.use((res)=>{
    return res.data||res
})

export default axios