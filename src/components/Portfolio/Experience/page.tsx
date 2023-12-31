import styles from '@/styles/components/Portfolio/experience.module.scss';
import Image from 'next/image';
import { profile } from '@/consts/Portfolio/profile';

export const Experience = () => {
  return (
    <div className={`${styles['experience']}`}>
      <ul>
        {
          profile.experiences.map((experience, index) => {
            return (
              <div key={index} className={styles['experience__card']}>
                <Image src={experience.image} alt={'image'} width={100} height={100} />
                <p className={styles['experience__title']}>{experience.title}</p>
                <p className={styles['experience__content']}>{experience.content}</p>
              </div>
            )
          })
        }
      </ul>
    </div>
  );
};
