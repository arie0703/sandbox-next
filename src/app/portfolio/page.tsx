import styles from '@/styles/pages/portfolio.module.scss'
import { ContentArea } from '@/components/Portfolio/ContentArea/page'
import { NeonHeaderB } from '@/components/Portfolio/Header/NeonHeaderB/page'
import { Footer } from '@/components/Portfolio/Footer/page'

// const getQiitaArticles = async () => {
//   const url = process.env.HOST_NAME + "/api/qiita"
//   try {
//     const response = await fetch(url, {
//       // MEMO: 後でapiのキャッシュ設定をする
//       cache: "no-store",
//     }).then(data => data.json())
//     console.log(response)
//     return response
//   } catch (e) {
//     console.log(e)
//     return {
//       msg: e,
//       articles: []
//     }
//   }
// }

export default async function Portfolio() {
  return (
    <main className={styles.portfolio}>
      <NeonHeaderB />
      <ContentArea />
      <Footer />
    </main>
  )
}
