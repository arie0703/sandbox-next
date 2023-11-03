'use client'

import { FormProvider, useForm } from 'react-hook-form';

import { FormInput } from '@/components/FormInput'
import styles from '@/styles/form.module.css'
import { SubmitButton } from '@/components/SubmitButton';

export default function Form() {

  // useFormの設定&使用したい機能を呼び出す
  const methods = useForm({
    mode: "onChange",
    criteriaMode: "all"
  });

  return (
    <div className={styles['form']}>
      <FormProvider {...methods}>
        <form>
          <h2>Sample Form</h2>
          <FormInput formType='user-name' />
        </form>
        <SubmitButton buttonText={'Submit'} />
      </FormProvider>
    </div>
  )
}
