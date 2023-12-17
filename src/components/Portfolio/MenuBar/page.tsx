
'use client'
import styles from '@/styles/components/Portfolio/menu-bar.module.scss';
import { SetStateAction } from 'react';

interface MenuBarProps {
  setSelectedItem: (value: SetStateAction<string>) => void
}

export const MenuBar = ({ setSelectedItem }: MenuBarProps) => {

  const items = ['Works', 'Career', 'Outputs']

  return (
    <div className={styles['menuBar']}>
      {items.map((item, index) => {
        return (
          <div className={styles['menuBar__item']} key={index} onClick={() => { setSelectedItem(item) }}>
            <p>{item}</p>
          </div>
        )
      })}
    </div>
  )
}
