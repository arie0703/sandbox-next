
'use client'
import styles from '@/styles/components/Portfolio/content-area.module.scss';
import { useState } from 'react';
import { MenuBar } from '../MenuBar/page';
import { WorkContainer } from '../WorkContainer/page';
import { About } from '../About/page';
import { Experience } from '../Experience/page';

export const ContentArea = () => {

  const [selectedItem, setSelectedItem] = useState('Top');

  return (
    <div className={styles.switchContent}>
      <MenuBar setSelectedItem={setSelectedItem} />
      {
        selectedItem === 'About' && <About />
      }
      {
        selectedItem === 'Experience' && <Experience />
      }
      {
        selectedItem === 'Works' && <WorkContainer />
      }
    </div>
  )
}
