import styles from '@/styles/components/Portfolio/about.module.scss';
import Image from 'next/image';
import { profile } from '@/consts/Portfolio/profile';
import Link from 'next/link';

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
          <div className={styles['about__links']}>
            {
              profile.links.map((link) => {
                return (
                  <Link href={link.url} target="_blank">
                    {link.title}
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};
