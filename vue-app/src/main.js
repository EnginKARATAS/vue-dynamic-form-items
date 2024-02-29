import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import newpage from "./pages/newpage/index.vue"


const app = createApp(newpage)
app.use(ElementPlus)
app.mount('#app')