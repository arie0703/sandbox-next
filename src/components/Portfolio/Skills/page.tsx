'use client'
import { cloudSkills, devOpsSkills, frontendSkills } from '@/consts/Portfolio/skills';
import styles from '@/styles/components/Portfolio/skills.module.scss';
import Image from 'next/image';
import { useState } from 'react';

export const Skills = () => {

  const [selectedItem, setSelectedItem] = useState<any>(null);

  return (
    <div className={`${styles['skills']}`}>
      <div className={`${styles['skills__container']} ${selectedItem ? styles['selected'] : ''}`}>
        <h2>Frontend Developing</h2>
        <div className={styles['skills__flex']}>
          {frontendSkills.map((item) => {
            return (
              <div onClick={() => { setSelectedItem(item) }}>
                <Image src={item.image} width={selectedItem ? 50 : 100} height={selectedItem ? 50 : 100} alt={item.title} />
              </div>
            )
          })}
        </div>
        <h2>Testing & DevOps</h2>
        <div className={styles['skills__flex']}>
          {devOpsSkills.map((item) => {
            return (
              <div onClick={() => { setSelectedItem(item) }}>
                <Image src={item.image} width={selectedItem ? 50 : 100} height={selectedItem ? 50 : 100} alt={item.title} />
              </div>
            )
          })}
        </div>
        <h2>Frontend Developing</h2>
        <div className={styles['skills__flex']}>
          {cloudSkills.map((item) => {
            return (
              <div onClick={() => { setSelectedItem(item) }}>
                <Image src={item.image} width={selectedItem ? 50 : 100} height={selectedItem ? 50 : 100} alt={item.title} />
              </div>
            )
          })}
        </div>
      </div>
      {selectedItem &&
        <div className={styles['skills__card']}>
          <div className={styles['skills__flex']}>
            <Image src={selectedItem.image} width={150} height={150} alt={selectedItem.title} />
            <div className={styles['skills__card__content']}>
              <p className={styles['skills__card__title']}>{selectedItem.title}</p>
              <p className={styles['skills__card__text']}>{selectedItem.description}</p>
            </div>
            <div className={styles['skills__card__close']} onClick={() => { setSelectedItem(null) }}>
              &times;
            </div>
          </div>
        </div>
      }
    </div>
  );
};
