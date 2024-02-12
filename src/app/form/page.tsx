'use client'

import { FormProvider, useForm } from 'react-hook-form';

import { FormInput } from '@/components/Form/FormInput'
import styles from '@/styles/pages/form.module.scss'
import { SubmitButton } from '@/components/Form/SubmitButton';

export default function Form() {

  // useFormの設定&使用したい機能を呼び出す
  const methods = useForm({
    mode: "onChange",
    criteriaMode: "all"
  });

  const submitData = async () => {

    const formData = {
      nickname: methods.watch('nickname'),
      comment: methods.watch('comment'),
      residence: methods.watch('residence'),
      iconPattern: methods.watch('icon-pattern'),
    }

    const response = await fetch('/api/profiles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formData }),
    });

    console.log(response);

    if (response.status === 201) {
      methods.reset();
      console.log(201);
    }
  };

  return (
    <div className={styles['form']}>
      <FormProvider {...methods}>
        <form>
          <h2>Sample Form</h2>
          <FormInput formType='nickname' />
          <FormInput formType='icon-pattern' />
          <FormInput formType='residence' />
          <FormInput formType='comment' />
        </form>
        <SubmitButton buttonText={'Submit'} handleClick={() => submitData()} />
      </FormProvider>
    </div>
  )
}
