import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
import router from './router'
import { MarkdownComponent } from './components'

const app = createApp(App)

app.use(router)

app.mount('#app')

app.component(MarkdownComponent.name, MarkdownComponent)