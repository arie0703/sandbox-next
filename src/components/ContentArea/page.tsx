
'use client'
import styles from '@/styles/components/content-area.module.scss';
import { useState } from 'react';
import { MenuBar } from '../MenuBar/page';
import { WorkContainer } from '../WorkContainer/page';
import { CareerContainer } from '../CareerContainer/page';
import { ArticleContainer } from '../ArticleContainer/page';
import { ArticleData } from '@/types/qiita';

interface ContentAreaProps {
  articles: ArticleData[]
}

export const ContentArea = ({articles}: ContentAreaProps) => {

const [selectedItem, setSelectedItem] = useState('Top');

  return (
    <div className={styles.switchContent}>
      <MenuBar setSelectedItem={setSelectedItem}/>
      {
        selectedItem === 'Works' && <WorkContainer />
      }
      {
        selectedItem === 'Career' && <CareerContainer />
      }
      {
        selectedItem === 'Outputs' && <ArticleContainer articles={articles}/>
      }
    </div>
  )
}
