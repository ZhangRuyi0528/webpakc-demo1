/****
 * 
 * 页面路由组件配入
 * 
 ****/
import Vue from 'vue';
import VueRouter from 'vue-router';

import List from './pages/demo-list.vue';
import Page2 from './pages/page2.vue';
import Page3 from './pages/page3.vue';
import Page4 from './pages/page4.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/page1', component: List
        },
        {
            path: '/page2', component: Page2
        },
        {
            path: '/page3', component: Page3
        },
        {
            path: '/page4', component: Page4
        }
    ]
})

export default router;