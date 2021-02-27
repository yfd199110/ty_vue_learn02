<template>
  <div class="articleShow">
    <Articles v-for="item in this.showData" :key="item.id"
     v-bind="item" />
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
  atricleShowSign!: boolean;

  get showData() {
    return myMod.articleList;
  }
}
</script>

<style lang="stylus" scoped>
.articleShow
  display: flex;
  flex-wrap: wrap;
</style>
