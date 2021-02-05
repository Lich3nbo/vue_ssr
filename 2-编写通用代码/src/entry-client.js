import { createApp } from './app'

const { app } = createApp()

// 假定 App.vue 模板中具有 `id="app"`
app.$mount('#app')