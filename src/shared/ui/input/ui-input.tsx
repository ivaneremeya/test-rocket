import clsx from 'clsx';
import { InputHTMLAttributes, useId } from 'react';
import styles from './input.module.scss';

export type UiInputProps = {
  className?: string;
  label: string;
  error?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
};

export function UiInput({ error, className, label, inputProps }: UiInputProps) {
  const id = useId();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const invalidChars = ['-', '+', 'e', '.']; // Добавил точку, если она тоже не нужна
    if (invalidChars.includes(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        {...inputProps}
        id={id}
        className={clsx(className, styles.input)}
        onKeyDown={handleKeyDown} // Используем onKeyDown
      />
      {error && <div className={styles.error}> {error} </div>}
    </div>
  );
}
