export type CalculationResultsProps = {
    result: {
      rollsNeeded: number;
      gluingArea: number;
      totalWallpaperArea: number;
    };
    onReset: () => void;
  };