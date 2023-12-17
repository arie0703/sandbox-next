'use client'
import styles from '@/styles/components/Portfolio/work-container.module.scss';
import { WorkCard } from '../WorkCard/page';
import { useState } from 'react';
import { WorkDescription } from '../WorkDescription/page';

export const WorkContainer = () => {

  const [selectedWorkIndex, setSelectedWorkIndex] = useState(-1)

  const works = [
    {
      title: 'みんなのポルトガル語単語帳',
      imagePath: '/images/portan-app-thumbnail.png',
      description: 'ポルトガル語の単語帳アプリです。ポルトガル語の単語を登録して、覚えたい単語を管理できます。',
      workUrl: 'http://localhost:3000',
      repositoryUrl: 'http://localhost:3000'
    },
    {
      title: 'Sample A',
      imagePath: '/images/sample-app-square.jpeg',
      description: 'Sample',
      workUrl: 'http://localhost:3000',
      repositoryUrl: 'http://localhost:3000'
    },
    {
      title: 'Sample B',
      imagePath: '/images/sample-app-square.jpeg',
      description: 'Sample',
      workUrl: 'http://localhost:3000',
      repositoryUrl: 'http://localhost:3000'
    },
  ]
  return (
    <div className={styles['workContainer']}>
      <div className={styles['workContainer__flex']}>
        {works.map((work, index) => {
          return (
            <WorkCard key={index} title={work.title} imagePath={work.imagePath} setSelectedWorkIndex={() => setSelectedWorkIndex(index)} workIndex={index} />
          )
        })}
      </div>
      <div className={styles['workContainer__description']}>
        {selectedWorkIndex > -1 &&
          <WorkDescription 
            title={works[selectedWorkIndex].title} 
            description={works[selectedWorkIndex].description} 
            workUrl={works[selectedWorkIndex].workUrl} 
            repositoryUrl={works[selectedWorkIndex].repositoryUrl} 
          />
        }
      </div>
    </div>
  )
}
