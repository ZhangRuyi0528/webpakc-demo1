// (function() {
    new Vue()
    import Vue from 'vue';
    import App from './index.vue';
    import ElementUI from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';
    Vue.use(ElementUI);

    const webApp = (val) => {
        return val += 1
    }
    console.log('33+1', webApp(33));
    console.log(12345678);
    // alert(3333345678);

    $(function() {

        // $('#workflowLabels').html('<div id="#apps"></div>');
        window.vueinstace = new Vue({
            el: '#wrap-vue',
            // render: h => h(App)
            render: function(h) {
                return h(App);
            }
        });
    });
// })();
// module.exports = function() {
//     var greet = document.createElement('div');
//     greet.textContent = "Hi there and greetings!";
//     return greet;
    
// }



