'use client'
import styles from '@/styles/components/FlashCard/card.module.scss'
import { useState } from 'react';

interface CardProps {
  frontText: string;
  backText: string;
}

export const Card = ({ frontText, backText }: CardProps) => {

  const [isFlipped, setIsFlipped] = useState<Boolean>(false);

  return (
    <div className={styles.card} onClick={() => setIsFlipped(!isFlipped)}>
      {isFlipped && (
        <p>{backText}</p>
      )}
      {!isFlipped && (
        <p>{frontText}</p>
      )}
    </div>
  );
};
