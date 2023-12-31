import { ArticleCard } from '@/components/Portfolio/ArticleCard/page';
import styles from '@/styles/components/Portfolio/article-container.module.scss'
import { ArticleData } from '@/types/qiita';

interface ArticleContainerProps {
  articles: ArticleData[]
}

export const ArticleContainer = ({articles}: ArticleContainerProps) => {

  return (
    <div className={styles['articleContainer']}>
      <div>
        {articles.map((article: ArticleData) => {
          return (
            <ArticleCard title={article.title} url={article.url} tags={article.tags}/>
          )
        })}
      </div>
    </div>
  )
}
