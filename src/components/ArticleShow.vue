<template>
  <div class="articleShow">
    <Articles v-for="(item, key) in 5" :key="key" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Articles from './Articles.vue';

@Component({
  name: 'ArticleShow',
  components: {
    Articles,
  },
})
export default class ArticleShow extends Vue {}
</script>

<style lang="stylus" scoped>
.articleShow
  display: flex;
  flex-wrap: wrap;
</style>
