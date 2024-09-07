<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<!-- <script>
import Loading from '@/components/Loading'
import Home from './views/Home'

export default {
  name: 'App',
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  components: {
    Loading,
    Home,
  },
};

</script> -->



<template>
  <v-app>
    <Loading v-show="loading"></Loading>
    <Home v-show="!loading"></Home>
  </v-app>
  <HelloWorld bpm="123" />
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
