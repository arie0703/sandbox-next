import styles from '@/styles/components/Portfolio/about.module.scss';
import Image from 'next/image';
import { profile } from '@/consts/Portfolio/profile';

export const About = () => {

  return (
    <div className={`${styles['about']}`}>
      <div className={`${styles['about__flex']}`}>
        <div className={`${styles['about__image']}`}>
          <Image src="/images/sample-profile-icon.jpeg" alt="me" width={200} height={200} />
        </div>
        <div className={`${styles['about__profile']}`}>
          <span className={styles['about__name']}>
            {profile.name}
          </span>
          <p className={styles['about__introduction']}>
            {profile.introduction}
          </p>
        </div>
      </div>
      <div className={`${styles['about__experience']}`}>
        <p className={styles['about__subtitle']}>Experience</p>
        <ul>
          {
            profile.experiences.map((experience, index) => {
              return (
                <div key={index} className={styles['about__experience__card']}>
                  <Image src={experience.image} alt={'image'} width={100} height={100} />
                  <p className={styles['about__experience__title']}>{experience.title}</p>
                  <p className={styles['about__experience__content']}>{experience.content}</p>
                </div>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};
