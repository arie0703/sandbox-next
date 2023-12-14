
'use client'
import styles from '@/styles/components/menu-bar.module.scss';
import { SetStateAction } from 'react';

interface MenuBarProps {
  setSelectedItem: (value: SetStateAction<string>) => void
}

export const MenuBar = ({setSelectedItem}: MenuBarProps) => {

  const items = ['Works', 'Career', 'Outputs']

  return (
    <div className={styles['menuBar']}>
      {items.map((item, index) => {
        return (
          <div className={styles['menuBar__item']} key={index} onClick={() => {setSelectedItem(item)}}>
            <h3>{item}</h3>
          </div>
        )
      })}
    </div>
  )
}
