<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)

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
  <h1>{{ msg }}</h1>

  <div>
    <audio ref="audio" :src="audioSource"></audio>
    <button @click="playAudio">
      <i class="fas fa-play"></i> <!-- 再生アイコン -->
    </button>
  </div>


  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <div>
    <audio ref="audio" :src="audioSource"></audio>
    <button @click="playAudio">再生</button>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
@import '@fortawesome/fontawesome-free/css/all.css'; /* Font Awesomeをインポート */

.read-the-docs {
  color: #888;
}

button {
  font-size: 16px;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

button i {
  margin-right: 5px;
}

button:hover {
  background-color: #45a049;
}
</style>
