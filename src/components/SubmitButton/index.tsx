import styles from '@/styles/components/submit-button.module.scss';

interface SubmitButtonProps {
  buttonText: string;
}

export const SubmitButton = ({buttonText}: SubmitButtonProps) => {

  return (
    <div className={styles['submitButton']}>
      {buttonText}
    </div>
  )
}
