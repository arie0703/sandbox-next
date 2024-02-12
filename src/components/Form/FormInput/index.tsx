import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from '@/styles/components/form-input.module.scss';

export interface FormInputProps {
  formType: string
  memo?: React.ReactNode;
}

export const FormInput = ({ formType, memo }: FormInputProps) => {
  const { register } = useFormContext();

  switch (formType) {
    case 'nickname':
      return (
        <dl className={`${styles['_formInput']} ${styles['dl01']}`}>
          <dt className={styles['_title']}>ニックネーム</dt>
          <dd>
            <input
              id="nickname"
              type="text"
              {...register(formType)}
            />
            <span className={styles['memo']}>{memo}</span>
          </dd>
        </dl>
      );
    case 'residence':
      return (
        <dl className={`${styles['_formInput']} ${styles['dl01']}`}>
          <dt className={styles['_title']}>おところ</dt>
          <dd>
            <input
              id={formType}
              type="text"
              {...register(formType)}
            />
            <span className={styles['memo']}>{memo}</span>
          </dd>
        </dl>
      );
    case 'comment':
      return (
        <dl className={`${styles['_formInput']} ${styles['dl01']}`}>
          <dt className={styles['_title']}>コメント</dt>
          <dd>
            <input
              id={formType}
              type="text"
              {...register(formType)}
            />
            <span className={styles['memo']}>{memo}</span>
          </dd>
        </dl>
      );
    case 'icon-pattern':
      return (
        <dl className={`${styles['_formInput']} ${styles['dl01']}`}>
          <dt className={styles['_title']}>アイコン</dt>
          <dd>
            <select id={formType} {...register(formType)}>

              <option value="">アイコンを選択してください</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </dd>
        </dl>
      );
    default:
      return (
        <dl className={`${styles['_form_box']}`}>
          <dt className={styles['_title']}>{formType}</dt>
          <dd>
            <input
              id={formType}
              type="text"
            />
            <span className={styles['memo']}>{memo}</span>
          </dd>
        </dl>
      );
  }
};
