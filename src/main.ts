import {createApp} from 'vue'
import {createPinia} from "pinia";
import Ant from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import router from './router'

const app = createApp(App)
app.use(Ant)
app.use(createPinia())
app.use(router)
app.mount('#app')
