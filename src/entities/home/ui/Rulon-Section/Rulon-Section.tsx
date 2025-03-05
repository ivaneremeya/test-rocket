import { rapportOptions, rollWidthOptions } from '@shared/const';
import {RadioGroupSection} from './RadioGroupSection';
import styles from './RadioGroupSection.module.scss';

type RulonSection = {
  control: any;
};

export const RulonSection: React.FC<RulonSection> = ({ control }) => {
  return (
    <div className={styles.radio__section}>
      <RadioGroupSection
        title='Параметры рулона'
        name='rollWidth'
        options={rollWidthOptions}
        control={control}
      />
      <RadioGroupSection
        title='Раппорт'
        name='rapport'
        options={rapportOptions}
        control={control}
      />
    </div>
  );
};

