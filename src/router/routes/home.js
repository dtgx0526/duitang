import Home from '@/views/Home/Index'
import New from '@/views/Home/New'
import Choice from '@/views/Home/Choice'

var home = {
    path:"/home",
    component:Home,
    children:[
        {path:"new",component:New},
        {path:"choice",component:Choice}
    ]

}
export default home