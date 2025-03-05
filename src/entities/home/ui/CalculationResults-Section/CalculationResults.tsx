import styles from './CalculationResults.module.scss';
import clsx from 'clsx';
import { CalculationResultsProps } from './type';
import { useState } from 'react';

export const CalculationResults: React.FC<CalculationResultsProps> = ({ result, onReset }) => {
  return (
    <div className={styles.calculation__container}>
      <h2 className={styles.calculation__title}>Результаты</h2>
      <ul className={styles.calculation__list}>
        <li className={styles.calculation__item}>
          <p className={styles.calculation__param}>{result.rollsNeeded}</p>
          <p className={styles.calculation__descr}>Кол-во рулонов</p>
        </li>
        <li className={styles.calculation__item}>
          <p className={styles.calculation__param}>{result.totalWallpaperArea} м2</p>
          <p className={styles.calculation__descr}>Кол-во m2 обоев</p>
        </li>
        <li className={styles.calculation__item}>
          <p className={styles.calculation__param}>{result.gluingArea} м2</p>
          <p className={styles.calculation__descr}>Площадь оклейки</p>
        </li>
      </ul>

      <div className={styles.calculation__btn_wrapper}>
        <button className={clsx(styles.btn_reset, styles.calculation__btn)} onClick={onReset}>
          Сбросить параметры
        </button>
        <button className={clsx(styles.btn_catalog, styles.calculation__btn)}>
          Перейти в каталог
        </button>
      </div>
    </div>
  );
};
