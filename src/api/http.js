import axios from "axios"

// axios.interceptors.request.use(

// )

axios.interceptors.response.use((res)=>{
    return res.data.data.union_categorys||res
})

export default axios