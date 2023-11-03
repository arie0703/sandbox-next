import styles from '@/styles/components/submit-button.module.css';

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
