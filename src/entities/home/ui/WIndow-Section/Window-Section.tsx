import React from 'react';
import { useFieldArray } from 'react-hook-form';
import styles from './Window-Form.module.scss';
import { WindowForm } from './Window-Form';
import { SvgComponent } from '@app/assets/btn-win';
import { WindowSectionProps } from './type';

export const WindowSection: React.FC<WindowSectionProps> = ({
  title,
  title_btn,
  name,
  register,
  control,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  });

  return (
    <div className='flex--section'>
      <h2>{title}</h2>
      <div className={styles.window__section}>
        {fields.map((field, index) => (
          <WindowForm
            key={field.id}
            index={index}
            remove={remove}
            register={register}
            name={name}
          />
        ))}
        <button
          className={styles.window__button}
          type='button'
          onClick={() => append({ height: null, width: null })}
        >
          <SvgComponent id={'svg'} />
          <p>{title_btn}</p>
        </button>
      </div>
    </div>
  );
};
