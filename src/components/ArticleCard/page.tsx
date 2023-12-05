'use client'
import styles from '@/styles/components/article-card.module.scss';
import { ArticleData, Tag } from '@/types/qiita';

interface ArticleCardProps {
  title: ArticleData['title']
  url: ArticleData['url']
  tags: Tag[]
}

export const ArticleCard = ({title, url, tags}: ArticleCardProps) => {

  return (
    <div className={styles['articleCard']}>
      <a href={url}>
        <p>{title}</p>
      </a>
      <div className={styles['articleCard__tags']}>
        {tags?.map((tag: Tag) => {
          return (
            <span>{tag.name}</span>
          )
        })}
      </div>
    </div>
  )
}
