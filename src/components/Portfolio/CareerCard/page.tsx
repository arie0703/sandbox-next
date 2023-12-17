'use client'
import styles from '@/styles/components/Portfolio/career-card.module.scss';

interface CareerCardProps {
  title: string
  description: string
  period: string
}

export const CareerCard = ({title, description, period}: CareerCardProps) => {

  return (
    <div className={styles['careerCard']}>
      <div className={styles['careerCard__period']}>
        {period}
      </div>
      <div className={styles['careerCard__title']}>
        <p>{title}</p>
      </div>
      <div className={styles['careerCard__description']}>
        <p>{description}</p>
      </div>
    </div>
  )
}
