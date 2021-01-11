import axios from "axios"

// axios.interceptors.request.use(

// )

axios.interceptors.response.use((res)=>{
    return res.data.data.object_list||res
})

export default axios