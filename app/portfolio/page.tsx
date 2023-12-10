import styles from '@/styles/pages/portfolio.module.scss'
import { WorkContainer } from '@/components/WorkContainer/page'
import { CareerContainer } from '@/components/CareerContainer/page'
import { ArticleContainer } from '@/components/ArticleContainer/page'

export default function Portfolio() {
  return (
    <main className={styles.portfolio}>
      <WorkContainer />
      <CareerContainer />
      <ArticleContainer />
    </main>
  )
}
