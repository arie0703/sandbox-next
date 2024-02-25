import { Card } from '@/components/FlashCard/Card';
import styles from '@/styles/pages/qiita.module.scss'

const getTableData = async () => {
  const url = process.env.HOST_NAME + "/api/flashcard"
  try {
    const result = await fetch(url, {
      // MEMO: 後でapiのキャッシュ設定をする
      cache: "no-store",
    }).then(data => data.json())
    return result
  } catch (e) {
    console.log(e)
    return {
      msg: e,
      cards: []
    }
  }
}
export default async function Qiita() {

  const data = await getTableData();

  return (
    <div className={styles['qiita']}>
      <div>
        {data.cards.map((card: any) => {
          return <Card frontText={card.frontText} backText={card.backText} />
        })}
      </div>
    </div>
  )
}
