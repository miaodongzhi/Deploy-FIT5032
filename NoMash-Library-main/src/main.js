import 'bootstrap/dist/css/bootstrap.min.css'; // 引入 Bootstrap 样式
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import './firebase'; // 引入 Firebase 配置文件

const app = createApp(App);

// 注册 PrimeVue 插件及其主题
app.use(PrimeVue, { theme: { preset: Aura } });

// 注册 Vue Router 插件
app.use(router);

// 挂载应用
app.mount('#app');
