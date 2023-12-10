import styles from '@/styles/pages/page.module.scss'
import { WorkContainer } from '@/components/WorkContainer/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <WorkContainer />
    </main>
  )
}
