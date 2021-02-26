<template>
  <div class="articleShow">
    <Articles v-for="(item, key) in test" :key="key" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Articles from './Articles.vue';
import { myMod } from '../store/HandleData';

@Component({
  name: 'ArticleShow',
  components: {
    Articles,
  },
})
export default class ArticleShow extends Vue {
  test: number = myMod.test;
}
</script>

<style lang="stylus" scoped>
.articleShow
  display: flex;
  flex-wrap: wrap;
</style>
