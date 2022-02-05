import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import antd from 'ant-design-vue'

createApp(App).use(antd).use(store).use(router).mount('#app')
