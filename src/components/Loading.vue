<!-- プレイ画面 -->

<script setup>
  import { ref, onMounted } from 'vue';

  // プロパティの定義
  defineProps({
    bpm: Number,  // playlistlinkはAPIから取得するため削除
  });

  // 埋め込むリンクを保存するリアクティブな変数
  const playlistlink = ref('');

  // コンポーネントがマウントされたときにAPIからデータを取得
  onMounted(async () => {
    try {
      const response = await fetch('http://localhost:3000/spotify/search');
      if (response.ok) {
        const data = await response.json();
        playlistlink.value = data.url;  // APIのレスポンスからリンクを取得
        console.log(data.link);
      } else {
        console.error('APIリクエストに失敗しました。');
      }
    } catch (error) {
      console.error('エラーが発生しました:', error);
    }
  });
</script>

<template>
  <!-- <h1>BPM: {{ bpm }}</h1> -->
   <h1>BPM : 109</h1>
  <!-- APIから取得したリンクを表示 -->
  <!-- iframeに取得したリンクを埋め込む -->
  <iframe
    v-if="playlistlink"
    style="border-radius:12px"
    :src="playlistlink"
    width="100%"
    height="152"
    frameborder="0"
    allowfullscreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>
</template>

<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 15px;
  font-size: 30px;
  border-radius: 20%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

button:hover {
  background-color: #45a049;
}

font-awesome-icon {
  font-size: 24px;
}

.disc {
  font-size: 3em;
  text-align: center;
  margin-top: 50px;
}
</style>
