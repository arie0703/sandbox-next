'use client'

import { FormInput } from '@/src/components/FormInput'
import styles from 'src/styles/form.module.css'

export default function Form() {
  return (
    <div className={styles['form']}>
      <h2>this is Form</h2>
      <FormInput formType='user-name' />
    </div>
  )
}
