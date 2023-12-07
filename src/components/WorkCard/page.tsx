'use client'
import styles from '@/styles/components/work-card.module.scss';
import Image from 'next/image';

interface WorkCardProps {
  title: string
  imagePath: string
}

export const WorkCard = ({title, imagePath}: WorkCardProps) => {

  return (
    <div className={styles['workCard']}>
      <div className={styles['workCard__image']}>
        <Image src={imagePath} alt={title} width={200} height={200} />
      </div>
      <h3>{title}</h3>
    </div>
  )
}
