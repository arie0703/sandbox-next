import { ArticleCard } from '@/components/ArticleCard/page';
import styles from '@/styles/components/article-container.module.scss'
import { ArticleData } from '@/types/qiita';

const getQiitaArticles = async () => {
  const url = process.env.HOST_NAME + "/api/qiita"
  try {
    const articles = await fetch(url, {
      // MEMO: 後でapiのキャッシュ設定をする
      cache: "no-store",
    }).then(data => data.json())
    console.log(articles)
    return articles
  } catch (e) {
    console.log(e)
    return {
      msg: e,
      articles: []
    }
  }
}
export const ArticleContainer = async() => {

  const data = await getQiitaArticles();

  return (
    <div className={styles['articleContainer']}>
      <div>
        {data.articles.map((article: ArticleData) => {
          return (
            <ArticleCard title={article.title} url={article.url} tags={article.tags}/>
          )
        })}
      </div>
    </div>
  )
}
