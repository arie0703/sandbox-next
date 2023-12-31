
'use client'
import styles from '@/styles/components/Portfolio/content-area.module.scss';
import { useState } from 'react';
import { MenuBar } from '../MenuBar/page';
import { WorkContainer } from '../WorkContainer/page';
import { ArticleContainer } from '../ArticleContainer/page';
import { ArticleData } from '@/types/qiita';
import { About } from '../About/page';

interface ContentAreaProps {
  articles: ArticleData[]
}

export const ContentArea = ({ articles }: ContentAreaProps) => {

  const [selectedItem, setSelectedItem] = useState('Top');

  return (
    <div className={styles.switchContent}>
      <MenuBar setSelectedItem={setSelectedItem} />
      {
        selectedItem === 'About' && <About />
      }
      {
        selectedItem === 'Works' && <WorkContainer />
      }
      {
        selectedItem === 'Outputs' && <ArticleContainer articles={articles} />
      }
    </div>
  )
}
