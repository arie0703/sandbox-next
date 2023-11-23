import styles from '@/styles/pages/qiita.module.scss'
import { QiitaArticle } from '@/types/qiita';

const getQiitaArticles = async () => {
  const url = process.env.HOST_NAME + "/api/qiita"
  try {
    const articles = await fetch(url)
      .then(data => data.json())
    return articles
  } catch (e) {
    console.log(e)
    return {
      msg: e,
      articles: []
    }
  }
}
export default async function Qiita() {

  const data = await getQiitaArticles();

  return (
    <div className={styles['qiita']}>
      <div>
        {data.articles.map((article: QiitaArticle) => {
          return (
          <div key={article.id} className={styles['article']}>
            <a href={article.url}>
              <p>{article.title}</p>
            </a>
          </div>
          )
        })}
      </div>
    </div>
  )
}
