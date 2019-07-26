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

const webApp = (val) => {
    return val += 1
}

console.log('33+1', webApp(33));
console.log(12345678);
// alert(3333345678);


// $('#workflowLabels').html('<div id="#apps"></div>');
window.onload = function() {
    new Vue({
        el: document.getElementById('wrap-vue'),
        router,
        // render: h => h(App)
        render: function(h) {
            return h(App);
        }
    });
}
// })();
// module.exports = function() {
//     var greet = document.createElement('div');
//     greet.textContent = "Hi there and greetings!";
//     return greet;
    
// }

