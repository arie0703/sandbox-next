'use client'
import styles from '@/styles/components/work-card.module.scss';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

interface WorkCardProps {
  title: string
  imagePath: string
  setSelectedWorkIndex: (value: SetStateAction<number>) => void
  workIndex: number
}

export const WorkCard = ({title, imagePath, setSelectedWorkIndex, workIndex}: WorkCardProps) => {

  return (
    <div className={styles['workCard']}>
      <div className={styles['workCard__image']} onClick={() => {setSelectedWorkIndex(workIndex)}}>
        <Image src={imagePath} alt={title} width={200} height={200} />
      </div>
      <h3>{title}</h3>
    </div>
  )
}
