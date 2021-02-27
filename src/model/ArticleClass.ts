// 关于文章分类的枚举
enum ArticleCate {
  Work = 0,
  Life = 1,
  Study = 2
}

class Article {
  id: number;

  cateId: ArticleCate;

  title: string;

  content: string;

  creatTime: string;

  constructor(id = -1, cateId = ArticleCate.Work, title = '', content = '') {
    this.id = id;
    this.cateId = cateId;
    this.title = title;
    this.content = content;
    // 自定义生成文件上传时间
    this.creatTime = this.creatTimeFn(Date.now());
  }

  // 生成创建时间
  creatTimeFn(timeStamp: number): string {
    const now = new Date(timeStamp);
    const timeStr = `${now.getFullYear()}-${(now.getMonth()) + 1}-${now.getDate()}  ${now.getHours()}:${now.getMinutes()}`;
    return timeStr;
  }

  // 生成对应的分类
  getCate(par: number): string {
    return ArticleCate[par];
  }
}

export default Article;
