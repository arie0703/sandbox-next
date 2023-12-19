import styles from '@/styles/components/Portfolio/Header/neon-header-b.module.scss';

export const NeonHeaderB = () => {
  return(
    <div className={styles['header']}>
      <div className={styles['header__logo']}>
        <b>K. A. portfolio</b>
      </div>
    </div>
  );
};
