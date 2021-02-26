<template>
  <div id="app">
    <TopNav />
    <ArticleShow />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopNav from './components/TopNav.vue';
import ArticleShow from './components/ArticleShow.vue';

@Component({
  name: 'App',
  components: {
    TopNav,
    ArticleShow,
  },
})
export default class App extends Vue {}
</script>

<style lang="stylus">
*
  margin: 0;
  padding: 0;
  box-sizing : border-box;
#app
  min-height 100vh
  background-image linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)
</style>
