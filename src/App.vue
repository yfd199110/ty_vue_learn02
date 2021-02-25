<template>
  <div id="app">
    <TopNav />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopNav from './components/TopNav.vue';

@Component({
  name: 'App',
  components: {
    TopNav,
  },
})
export default class App extends Vue {}
</script>

<style lang="stylus">
body
  margin: 0;
  padding: 0;
#app
  min-height 100vh
  background-image linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)
</style>
