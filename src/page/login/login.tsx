import styles from './login.module.scss';
import { Link } from 'react-router';

export const Login = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Калькулятор обоев</h1>
        <p className={styles.description}>
          Онлайн-калькулятор расчета обоев по поможет вам определить число рулонов, требуемых для
          оклеивания, с учетом окон и дверей. Чтобы получить точные результаты, просто укажите
          параметры помещения и размеры в специальной таблице. Наша программа также берет в учет
          повторение рисунка (раппорт), что позволяет оптимизировать расходы на материалы и клей.
        </p>
        <div className={styles.container__btn}>
          <Link className='button' to={'/home'}>
            Начать расчет материалов
          </Link>
        </div>
      </div>
    </div>
  );
};
