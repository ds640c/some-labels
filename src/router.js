import Vue from 'vue'
import VueRouter from 'vue-router' 
import Home from './components/Home.vue'
import Excel from './components/Excel.vue'
import IDBS from './components/IDBS.vue'

Vue.use(VueRouter) 

const routes = [ 
    { path: '/', component: Home },
    { path: '/labels/idbs', component: IDBS },
    { path: '/labels/excel', component: Excel },
]

const router  = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router