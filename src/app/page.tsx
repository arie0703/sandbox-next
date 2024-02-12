import styles from '@/styles/pages/page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <a href='/portfolio'>Portfolio</a>
      <a href='/form'>Sample Form</a>
    </main>
  )
}
