/****
 * 
 * 页面路由组件配入
 * 
 ****/
import Vue from 'vue';
import VueRouter from 'vue-router';

import List from './pages/page1.vue';
import Page2 from './pages/page2.vue';
import Page3 from './pages/page3.vue';
import Page4 from './pages/page4.vue';
import TableList from './childPgs/tableList.vue';
import Carousel from './childPgs/carousel.vue';
import Map from './childPgs/Map.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    //页面所能访问页面
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
        },

        // 子pages

        {
            path: '/tablepage', component: TableList
        },
        {
            path: '/carousel', component: Carousel
        },
        {
            path: '/map', component: Map
        }
    ]
})

export default router;