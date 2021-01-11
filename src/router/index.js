import Vue from 'vue'
import VueRouter from 'vue-router'
import catgoryRouter from './route/catgory'

Vue.use(VueRouter)

const routes = [
  ...catgoryRouter,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};

export default router
