import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


// Font Awesomeのライブラリをインポート
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// 必要なアイコンをインポート
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { faPlay, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';

import { createWebHistory, createRouter } from 'vue-router'

import Start from './components/Start.vue'
import HelloWorld from './components/HelloWorld.vue'
import Loading from './components/Loading.vue';

const routes = [
  { path: '/', component: Start },
  { path: '/world', component: HelloWorld },
  { path: '/roading', component: Loading },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// ライブラリにアイコンを追加
library.add(faHeartPulse);
library.add(faPlay, faForward, faBackward);
library.add(faCompactDisc);


// アプリケーションにFontAwesomeIconコンポーネントをグローバルに登録
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router) //これを追記して、vue-routerを使用できるようにする
app.mount('#app');
