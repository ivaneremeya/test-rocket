import React from 'react';
import clsx from 'clsx';
import styles from './RadioGroupSection.module.scss';
import { useController } from 'react-hook-form';
import { RadioGroupSectionProps } from './type';
import { UiButtonCheck } from '@shared/ui/button-checkbox/UiButtonCheck';

export const RadioGroupSection: React.FC<RadioGroupSectionProps> = ({
  className,
  title,
  name,
  options,
  control,
}) => {
  const { field } = useController({
    name,
    control,
  });

  return (
    <div className={clsx(className, styles.radio_container, 'flex--section')}>
      <h2>{title}</h2>
      <div className={clsx(className, styles.wrapper)}>
        {options.map((option) => (
          <React.Fragment key={option.value}>
            <UiButtonCheck
              className={className}
              value={option.value}
              name={name}
              field={field}
              style={option.style}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
