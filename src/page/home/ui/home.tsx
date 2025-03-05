import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './home.module.scss';
import { useNavigate } from 'react-router';
import { RoomParametersForm } from '@entities/home/ui/Room-Section/RoomParametersForm';
import { RulonSection } from '@entities/home/ui/Rulon-Section/Rulon-Section';
import { WindowSection } from '@entities/home/ui/WIndow-Section/Window-Section';
import { CalculationResults } from '@entities/home/ui/CalculationResults-Section/CalculationResults';
import { SvgComponent } from '@app/assets/btn-win';
import { useCalculationStore } from '../model/useCalculationStore';
import { Inputs } from './type';



export const HomePage = () => {
  const navigate = useNavigate();
  const [isShowingResults, setIsShowingResults] = useState(false);
  const { calculate, rollsNeeded, gluingArea, totalWallpaperArea } = useCalculationStore();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setValue,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('Form data:', data);
    calculate(data);
    setIsShowingResults(true);
  };

  const handleReset = () => {
    reset();

    setValue('rollWidth', '');
    setValue('rapport', '');

    setIsShowingResults(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <RoomParametersForm register={register} errors={errors} />
      <RulonSection control={control} />
      <div className={styles.windows_container}>
        <WindowSection
          name={'windows'}
          title={'Параметры окон'}
          register={register}
          control={control}
          title_btn={'Добавить окно'}
        />
        <WindowSection
          name={'doors'}
          title={'Параметры дверей'}
          title_btn={'Добавить дверь'}
          register={register}
          control={control}
        />
      </div>
      {isShowingResults ? (
        <CalculationResults
          result={{ rollsNeeded, gluingArea, totalWallpaperArea }}
          onReset={handleReset}
        />
      ) : (
        <div className={styles.btn_wrapper}>
          <button className='button' type='submit'>
            {isMobile ? 'Расчет материалов' : 'Начать расчет материалов'}
          </button>
        </div>
      )}
      <div className={styles.btn__position}>
        <button className='button__delete' type='button' onClick={() => navigate('/')}>
          <SvgComponent id={'delete'} />
        </button>
      </div>
    </form>
  );
};
