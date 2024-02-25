import styles from '@/styles/pages/page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.link}>
        <a href='/portfolio'>Portfolio</a>
      </div>
      <div className={styles.link}>
        <a href='/form'>Sample Form</a>
      </div>
      <div className={styles.link}>
        <a href='/flashcard'>Notion Flash Card</a>
      </div>
    </main>
  )
}
