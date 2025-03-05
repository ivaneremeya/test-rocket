import { UseFieldArrayRemove } from 'react-hook-form';
import styles from './Window-Form.module.scss';
import { SvgComponent } from '@app/assets/btn-win';
import { WindowFormProps } from './type';

export const WindowForm: React.FC<WindowFormProps> = ({ index, remove, register, name }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const invalidChars = ['-', '+', 'e', '.']; // Добавил точку, если она тоже не нужна
    if (invalidChars.includes(event.key)) {
      event.preventDefault();
    }
  };
  return (
    <div className={styles.window__form}>
      <div className={styles.window__header}>
        <h3>Окно </h3>
        <button className='button__delete' type='button' onClick={() => remove(index)}>
          <SvgComponent id={'delete'} />
        </button>
      </div>
      <div className={styles.window__inputs}>
        <div className={styles.window__input}>
          <label>Ширина м</label>
          <input
            className={styles.input_width}
            type='number'
            placeholder='0'
            onKeyDown={handleKeyDown}
            {...register(`${name}.${index}.width`)}
          />
        </div>

        <div className={styles.window__input}>
          <label>Высота м</label>
          <input
            className={styles.input_width}
            type='number'
            placeholder='0'
            onKeyDown={handleKeyDown}
            {...register(`${name}.${index}.height`)}
          />
        </div>
      </div>
    </div>
  );
};
