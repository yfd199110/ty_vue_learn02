<template>
  <div class="container">
    <!-- title -->
    <h3>伊朗导弹袭击美</h3>
    <!-- 修改和删除的功能图标 -->
    <section>
      <i class="iconfont icon-xiugai"></i>
      <i class="iconfont icon-shanchu"></i>
    </section>
    <!-- 文章的信息 -->
    <p>2020-01-20 18:32 分类:<span>生活</span></p>
    <article>
        测试文本
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Articles',
})
export default class Articles extends Vue {}
</script>

<style lang="stylus" scoped>
// 引入css样式表
@import '../assets/iconfont/iconfont.css'

.container
  border: 1px solid rgba(0,0,0,0.4);
  background: #81ecec;
  box-shadow: 5px 5px 4px rgba(0,0,0,0.4);
  width: 300px;
  margin: 10px 15px 0 10px;
  padding: 10px;
  border-radius: 10px;
  position: relative;
  height: 200px;
  overflow: hidden;
  h3
    border-bottom: 1px solid black;
    padding-bottom: 4px;
    display: inline-block;
    white-space: nowrap;
    max-width: 225px;
    overflow: hidden;
    text-overflow: ellipsis;
  section
    position: absolute;
    right: 10px;
    top: 10px;
    i
      margin-left: 10px;
      font-size: 16px;
  &>p
    font-size: 14px;
  article
    margin-top: 15px;
    height: 100px;
    line-height: 1.5;
</style>
