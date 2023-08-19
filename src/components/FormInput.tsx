import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from 'src/styles/form-input.module.scss';

export interface FormInputProps {
  formType: string
  memo?: React.ReactNode;
}

export const FormInput = ({ formType, memo}: FormInputProps) => {
  // TODO: useForm周り実装
  // const { register, setValue, trigger, getValues } = useFormContext();

  switch (formType) {
    case 'user-name':
      return (
        <dl className={`${styles['_formInput']} ${styles['dl01']}`}>
          <dt className={styles['_title']}>ユーザー名</dt>
          <dd>
            <input
              id="user-name"
              type="text"
              placeholder='ユーザー名'
              // {...register('user-name')}
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
