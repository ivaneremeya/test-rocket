import { UiInput } from '@shared/ui/input/ui-input';
import styles from './roomParams.module.scss';
import { FieldValues } from 'react-hook-form';

type RoomParametersFormProps<T extends FieldValues = FieldValues> = {
  register: any;
  errors: any;
};

export const RoomParametersForm = <T extends FieldValues = FieldValues>({
  register,
  errors,
}: RoomParametersFormProps<T>) => {
  return (
    <div className='flex--section'>
      <h2>Параметры комнаты</h2>
      <div className={styles.wrapper}>
        <UiInput
          className={styles.input_width}
          label='Длина м '
          error={errors?.length?.message}
          inputProps={{
            type: 'number',
            id: 'length',
            min: '0',
            ...register('length', {
              required: 'Длина обязательна для заполнения',
              valueAsNumber: true,
              min: {
                value: 0,
                message: 'Длина должна быть неотрицательным числом',
              },
            }),
          }}
        />
        <UiInput
          className={styles.input_width}
          label='Ширина м '
          error={errors?.width?.message}
          inputProps={{
            type: 'number',
            id: 'width',
            min: '0',
            ...register('width', {
              required: 'Ширина обязательна для заполнения',
              valueAsNumber: true,
              min: {
                value: 0,
                message: 'Ширина должна быть неотрицательным числом',
              },
            }),
          }}
        />
        <UiInput
          className={styles.input_width}
          label='Высота м'
          error={errors?.height?.message}
          inputProps={{
            type: 'number',
            id: 'height',
            min: '0',
            ...register('height', {
              required: 'Высота обязательна для заполнения',
              valueAsNumber: true,
              min: {
                value: 0,
                message: 'Высота должна быть неотрицательным числом',
              },
            }),
          }}
        />
      </div>
    </div>
  );
};
