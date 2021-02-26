import {
  Module,
  VuexModule,
  getModule,
  MutationAction,
} from 'vuex-module-decorators';
import axios from 'axios';
import store from './index';

@Module({ dynamic: true, store, name: 'HandleData' })
export default class HandleData extends VuexModule {
  test = 4;

  articleData: object[] = [];

  // 获取数据的方法
  @MutationAction
  async initData() {
    const webData = await axios.get('http://localhost:3000/customArticleDate');
    const articleData = webData.data;
    console.log(articleData);
    return { articleData };
  }
}

export const myMod = getModule(HandleData);
