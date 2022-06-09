// import { createApp } from 'vue'

// import App from './App.vue'
// import Main from './Main.vue'
// import Modal from './Modal.vue'
// import Task3 from './Task3.vue'

// createApp(Main).mount('#app')
// // createApp(Modal).mount('#app')
// // createApp(Task3).mount('#app')

import { createApp } from 'vue'
// import App from './App.vue'
// import WrapperComponent from './WrapperComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import router from './routers/index'

// createApp(App).mount('#app')
createApp(HeaderComponent).use(router).mount('#app')


