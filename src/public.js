/*
 * @Author: zry
 * @Date: 2021-03-30 15:53:16
 * @LastEditors: zry
 * @LastEditTime: 2021-03-31 17:24:04
 * @Description: 
 */
// (function() {
new Vue()
import Vue from 'vue';
import App from './index.vue';
// import ElementUI from 'element-ui';
import router from './router';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

// import VueResource from 'vue-resource'
// Vue.use(VueResource)

new Vue({
    router,
    render: h => h(App)
}).$mount('#wrap-vue');
// })();
// module.exports = function() {
//     var greet = document.createElement('div');
//     greet.textContent = "Hi there and greetings!";
//     return greet;
    
// }

