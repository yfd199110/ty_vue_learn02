import {
  Module,
  VuexModule,
  getModule,
  MutationAction,
  Mutation,
} from 'vuex-module-decorators';
import axios from 'axios';
import store from './index';

@Module({ dynamic: true, store, name: 'HandleData' })
export default class HandleData extends VuexModule {
  articleData: object[] = [];

  // 存储当前的点击的文章的title
  currentTitle = 'test text';

  cisShowModalBox = false;

  get articleList(): object[] {
    return this.articleData;
  }

  get isShowModalBox() {
    return this.cisShowModalBox;
  }

  @Mutation
  setVuexData(value: object[]) {
    this.articleData = value;
  }

  @Mutation
  isShowModalBoxSet(val: boolean) {
    this.cisShowModalBox = val;
  }

  @Mutation
  currentTitleSet(title: string) {
    this.currentTitle = title;
  }

  // 获取数据的方法
  @MutationAction
  async initData() {
    const webData = await axios.get('http://localhost:3000/customArticleDate');
    const articleData = webData.data;
    return { articleData };
  }
}

export const myMod = getModule(HandleData);
