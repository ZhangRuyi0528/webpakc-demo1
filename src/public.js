// (function() {
new Vue()
import Vue from 'vue';
import App from './index.vue';
import ElementUI from 'element-ui';
import router from './router';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// import VueResource from 'vue-resource'
// Vue.use(VueResource)

new Vue({
    el: '#wrap-vue',
    router,
    render: h => h(App)
});
// })();
// module.exports = function() {
//     var greet = document.createElement('div');
//     greet.textContent = "Hi there and greetings!";
//     return greet;
    
// }

