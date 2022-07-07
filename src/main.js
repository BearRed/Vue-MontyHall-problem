import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
/* new Vue({
    render: h => h(App) em vez da de baixo
    render(createElement){
        return createElement(App)
    }
}).$mount("#app")*/
