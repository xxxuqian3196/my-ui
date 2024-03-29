import Vue from 'vue'
import App from './App.vue'
import MyButton from './components/button.vue'

Vue.config.productionTip = false

Vue.component(MyButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
