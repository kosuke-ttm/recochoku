<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
  bpm: Number,
});

// const count = ref(0)

// data() {
//     return {
//       audioSource: 'your-audio-file.mp3'  // 音声ファイルのパス
//     };
//   },
//   methods: {
//     playAudio() {
//       this.$refs.audio.play();
//     }
//   }
// };

</script>

<template>
  <v-app>
    <Loading v-show="loading"></Loading>
    <Home v-show="!loading"></Home>
  </v-app>
  
  <div>
    <div v-if="isLoading">
      <vue-loading 
        type="bars"
        color="d9544e"
        :size="{width: '50px', height: '50px'}"
      ></vue-loading>
    </div>    <div v-else> 
      <div>{{ users }}</div>
    </div>
  </div>
  <div class="beating">
    <!-- heart-pulseアイコンを使用 -->
    <font-awesome-icon :icon="['fas', 'heart-pulse']" />
  </div>
  <h1>Beat Searching...</h1>
  <h1>{{ msg }}</h1>
  <!-- <p>BPM is {{ props.bpm}}</p> -->
  <div class="card">
    <!-- <button type="button" @click="count++">count is {{ count }}</button> -->
  </div>
  <div>
    <audio ref="audio" :src="audioSource"></audio>
  </div>
  <div>
  </div>


<!-- 固定フッター -->
  <footer class="footer">
    <button @click="handleClick('Folder')">Folder</button>
    <button @click="handleClick('Beat')">Beat</button>
    <button @click="handleClick('Setting')">Setting</button>
  </footer>

</template>

<style scoped>
@import '@fortawesome/fontawesome-free/css/all.css';
/* Font Awesomeをインポート */

button {
  font-size: 16px;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  display: block;
  margin: auto;
  align-items: center;
  justify-content: center;
}
.beating {
  font-size:10em;
}

button i {
  margin-right: 5px;
}

/* ボタンのスタイル */
.footer button {
  flex-grow: 1; /* ボタンをフッター幅いっぱいに広げる */
  background-color: #333;
  color: white;
  border: none;
  padding: 15px 0;
  font-size: 16px;
  cursor: pointer;
  border-right: 1px solid #333; /* ボタン間に線を入れる */
}

.footer button:last-child {
  border-right: none; /* 最後のボタンは右側に線をなくす */
}

button:hover {
  background-color: #45a049;
}

/* 固定フッターのスタイル */
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  background-color: #333;
  color: white;
  text-align: center;
  justify-content: space-between; /* ボタンを間隔なしで横並びに */
  align-items: center;
  padding: 10px 0;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}
</style>
