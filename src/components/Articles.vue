<template>
  <div class="container">
    <!-- title -->
    <h3>{{this.customData.title}}</h3>
    <!-- 修改和删除的功能图标 -->
    <section>
      <i class="iconfont icon-xiugai" title="修改"></i>
      <i class="iconfont icon-shanchu" @click="delHandle" title="删除"></i>
    </section>
    <!-- 文章的信息 -->
    <p>{{this.customData.creatTime}} 分类:<span>{{this.customData.getCate(this.cateId)}}</span></p>
    <article>
        {{this.customData.content}}
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Article from '../model/ArticleClass';
import { myMod } from '../store/HandleData';

@Component({
  name: 'Articles',
})
export default class Articles extends Vue {
  showModalBox = true;

  @Prop(Number)
  id!: number;

  @Prop(String)
  title!: string;

  @Prop(Number)
  cateId!: number;

  @Prop(String)
  content!: string;

  get showModalBoxComputed(): boolean {
    return this.showModalBox;
  }

  set showModalBoxComputed(bol: boolean) {
    this.showModalBox = bol;
  }

  get customData(): Article {
    return new Article(this.id, this.cateId, this.title, this.content);
  }

  // 删除事件
  delHandle() {
    // this.showModalBoxComputed = !this.showModalBox;
    // console.log(this.showModalBoxComputed);
    myMod.isShowModalBoxSet(true);
    myMod.currentTitleSet(this.customData.title);
  }
}
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
      cursor pointer
  &>p
    font-size: 14px;
  article
    margin-top: 15px;
    height: 100px;
    line-height: 1.5;
</style>
