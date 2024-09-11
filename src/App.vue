<script setup>
import { RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue'
import Loading from './components/Loading.vue'
import Start from './components/Start.vue'
import { useRouter } from 'vue-router';
console.log(useRouter())
</script>

<script>

</script>



<template>
  
  <!-- <v-app>
    <Loading v-show="loading"></Loading>
    <Home v-show="!loading"></Home>
  </v-app> -->
  
  <!-- <Start /> -->
  <!-- <HelloWorld bpm="123" /> -->
  <RouterView></RouterView> 
  <!-- <Loading bpm="123"/> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
