'use client'
import styles from '@/styles/components/work-container.module.scss';
import { CareerCard } from '../CareerCard/page';

export const CareerContainer = () => {

  const careers = [
    {
      title: 'Sample A',
      description: 'sample sample sample \n sample sample sample \n sample sample sample',
      period: '2020/05 - 2020/06'
    },
    {
      title: 'Sample B',
      description: 'sample sample sample \n sample sample sample \n sample sample sample',
      period: '2020/05 - 2020/06'
    },
    {
      title: 'Sample C',
      description: 'sample sample sample \n sample sample sample \n sample sample sample',
      period: '2020/05 - 2020/06'
    },
  ]

  return (
    <div className={styles['careerContainer']}>
      <div className={styles['careerContainer__flex']}>
        {careers.map((career, index) => {
          return (
            <CareerCard key={index} title={career.title} description={career.description} period={career.period} />
          )
        })}
      </div>
    </div>
  )
}
