import Home from '@/views/Home/Index'
import New from '@/views/Home/New'
import Choice from '@/views/Home/Choice'
import Details from '@/views/Home/details.vue'

var home = [{
        path: "/home",
        component: Home,
        children: [
            { path: "new", component: New },
            { path: "choice", component: Choice }
        ],
    },
    {
        path: "/Home/details",
        component: Details,
    },
]
export default home