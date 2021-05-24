import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')



import AOS from "aos";
import "aos/dist/aos.css";
app.AOS = new AOS.init({ offset:15,
    duration: 800, });

// export default {
// created ( ) {
// AOS.init({
//     offset:15,
//     duration: 800,
// })
// }

// }
