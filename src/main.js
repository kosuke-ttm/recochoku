import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


// Font Awesomeのライブラリをインポート
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// 必要なアイコンをインポート
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';

// ライブラリにアイコンを追加
library.add(faHeartPulse);

// アプリケーションにFontAwesomeIconコンポーネントをグローバルに登録
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
