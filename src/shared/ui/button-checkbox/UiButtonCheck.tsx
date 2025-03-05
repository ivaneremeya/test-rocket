import clsx from 'clsx';
import React from 'react';
import styles from './UiButtonCheck.module.scss';

export type UiButtonCheckProps = {
  className?: string;
  value: string;
  name: string;
  field: any;
  style: any;
};

export const UiButtonCheck: React.FC<UiButtonCheckProps> = ({ className, value, name, field, style }) => {
  const isSelected = field.value === value;

  return (
    <label
      style={style}
      className={clsx(className, styles.uiButtonCheck, isSelected && styles.uiButtonChecked)}
    >
      <input
        className={styles.radioButton}
        type='radio'
        value={value}
        name={name}
        checked={isSelected}
        onChange={field.onChange}
      />
      {value}
    </label>
  );
};

