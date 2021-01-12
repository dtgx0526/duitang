import HomePage from '@/views/HomePage/index.vue'
import Selected from '@/views/HomePage/selected.vue'
import Newest from '@/views/HomePage/newest.vue'
import Details from '@/views/HomePage/details.vue'

var homepage = [

    {
        path: "/HomePage",
        component: HomePage,
        children: [
            { path: "selected", component: Selected },
            { path: "newest", component: Newest },
        ],
    },
    {
        path: "/HomePage/details",
        component: Details,
    },
]
export default homepage