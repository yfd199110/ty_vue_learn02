<template>
  <div class="modalBox" v-show="this.sign">
    <h3>{{this.title}}</h3>
    <p>您确定删除此文章吗？</p>
    <section>
      <button @click="delHandle">删除</button>
      <button @click="cancelHandle">取消</button>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { myMod } from '../store/HandleData';

@Component({
  name: 'ModalBox',
})
export default class ModalBox extends Vue {
  get sign() {
    return myMod.isShowModalBox;
  }

  get title() {
    return myMod.currentTitle;
  }

  delHandle() {
    myMod.isShowModalBoxSet(false);
  }

  cancelHandle() {
    myMod.isShowModalBoxSet(false);
  }
}
</script>

<style lang="stylus" scoped>
.modalBox
  background #ffaf40
  text-align center
  width 500px
  padding 10px 15px
  border-radius 20px
  box-shadow 0 0 10px rgba(0,0,0,0.2)
  position absolute
  left 50%
  top 50%
  transform translate(-50%, -50%)
  section
    display flex
    justify-content space-around
    margin-top 20px
    button
      padding 5px 8px
      color white
      cursor pointer
      border none
      outline none
      &:first-child
        background #3ae374
        border-radius 20px 10px
      &:last-child
        background #ff4d4d
        border-radius 10px 20px
      &:active
        position relative
        top 4px
  h3
    margin-bottom 10px
    text-overflow ellipsis
    white-space nowrap
    overflow hidden
  p
    font-weight 800
</style>
