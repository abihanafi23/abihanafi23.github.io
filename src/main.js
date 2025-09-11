import { createApp } from 'vue'
import { ElDropdown, ElButton, ElMenu } from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

import AOS from 'aos'
import 'aos/dist/aos.css'

createApp(App).use(ElDropdown).use(ElButton).use(ElMenu).use(router).mount('#app')

AOS.init()
