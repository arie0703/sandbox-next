import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from '@/styles/components/form-input.module.scss';

export interface FormInputProps {
  formType: string
  memo?: React.ReactNode;
}

export const FormInput = ({ formType, memo}: FormInputProps) => {
  const { register } = useFormContext();

  const [userNamePreview, setUserNamePreview] = useState('');

  switch (formType) {
    case 'user-name':
      return (
        <dl className={`${styles['_formInput']} ${styles['dl01']}`}>
          <dt className={styles['_title']}>ユーザー名 {userNamePreview}</dt>
          <dd>
            <input
              id="user-name"
              type="text"
              placeholder='ユーザー名'
              {...register('user-name' , {
                onChange: (e) => {
                  setUserNamePreview(e.target.value)
                }
              })}
            />
            <span className={styles['memo']}>{memo}</span>
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
              // {...register(formType)}
            />
            <span className={styles['memo']}>{memo}</span>
          </dd>
        </dl>
      );
  }
};
