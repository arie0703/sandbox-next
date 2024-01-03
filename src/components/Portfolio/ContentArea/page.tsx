
'use client'
import styles from '@/styles/components/Portfolio/content-area.module.scss';
import { MenuBar } from '../MenuBar/page';
import { WorkContainer } from '../WorkContainer/page';
import { About } from '../About/page';
import { Skills } from '../Skills/page';
import { Title } from '@/components/Title/page';

export const ContentArea = () => {

  const items = ['About', 'Skills', 'Works']

  return (
    <div className={styles.switchContent}>
      <MenuBar items={items} />
      <Title title={'About'} />
      <About />
      <Title title={'Skills'} />
      <Skills />
      <Title title={'Works'} />
      <WorkContainer />
    </div>
  )
}
