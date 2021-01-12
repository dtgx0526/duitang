import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import SelectedRouter from './routes/selected.js'

const routes = [{
        path: "/",
        redirect: "/HomePage/Selected",
    },
    ...SelectedRouter,
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router