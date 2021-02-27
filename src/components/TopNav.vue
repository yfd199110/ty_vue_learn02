<template>
  <nav>
    <img src="../assets/amazon-web-services.svg" alt="公司的一个logo">
    <div class="container">
      <div>新建<span></span></div>
      <div>全部<i>{{this.total}}</i><span></span></div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { myMod } from '../store/HandleData';

@Component({
  name: 'TopNav',
})
export default class TopNav extends Vue {
  get total() {
    return myMod.articleList.length;
  }
}
</script>

<style lang="stylus" scoped>
nav
  display: flex
  background: rgba(0,0,0,0.1)
  font-size: 16px;
  padding-right: 15px;
  img
    height: 50px
  .container
    flex: 1;
    display: flex;
    justify-content: flex-end;
    div
      height: 50px
      display:flex
      align-items: center
      padding: 0 20px;
      cursor: pointer;
      &:hover
        background : green
      span
        width: 10px;
        height: 10px;
        border-right: 2px solid black;
        border-bottom: 2px solid black;
        transform: translateX(10px) rotate(45deg);
      i
        font-size: 10px;
        background: rgba(0,0,0,0.2)
        color: white;
        padding: 0 8px;
        border-radius: 5px;
        margin-left: 10px;
</style>
