import { create } from 'zustand';
import { Width } from '../ui/type';

interface CalculationState {
  rollsNeeded: number;
  gluingArea: number;
  totalWallpaperArea: number;
  calculate: (data: any) => void;
}

export const useCalculationStore = create<CalculationState>((set) => ({
  rollsNeeded: 0,
  gluingArea: 0,
  totalWallpaperArea: 0,
  calculate: (data: {
    rollWidth: string;
    length: number;
    width: number;
    height: number;
    windows: Width[];
    doors: Width[];
    rapport: string;
  }) => {
    console.log('Входные данные:', data);

    const rollWidthMatch = data.rollWidth.match(/([\d.]+) x/);
    const rollLengthMatch = data.rollWidth.match(/x ([\d.]+)m/);

    let rollWidth = rollWidthMatch && rollWidthMatch[1] ? parseFloat(rollWidthMatch[1]) : NaN;
    let rollLength = rollLengthMatch && rollLengthMatch[1] ? parseFloat(rollLengthMatch[1]) : NaN;

    rollWidth = isNaN(rollWidth) || rollWidth <= 0 ? 0 : rollWidth;
    rollLength = isNaN(rollLength) || rollLength <= 0 ? 0 : rollLength;

    const { length, width, height } = data;

    if (length <= 0 || width <= 0 || height <= 0) {
      console.error('Некорректные размеры комнаты.');
      set({ rollsNeeded: 0, gluingArea: 0, totalWallpaperArea: 0 });
      return;
    }

    const rapportValue = parseFloat(data.rapport);

    if (isNaN(rapportValue) || rapportValue < 0) {
      console.error('Некорректный раппорт.');
      return;
    }

    const perimeter = 2 * (length + width);
    const totalWallArea = perimeter * height;

    let windowArea = 0;
    if (data.windows && data.windows.length > 0) {
      windowArea = data.windows.reduce((sum, window) => {
        let width = parseFloat(window.width);
        let height = parseFloat(window.height);

        width = isNaN(width) || width <= 0 ? 0 : width;
        height = isNaN(height) || height <= 0 ? 0 : height;

        return sum + width * height;
      }, 0);
    }

    let doorArea = 0;
    if (data.doors && data.doors.length > 0) {
      doorArea = data.doors.reduce((sum, door) => {
        let width = parseFloat(door.width);
        let height = parseFloat(door.height);

        width = isNaN(width) || width <= 0 ? 0 : width;
        height = isNaN(height) || height <= 0 ? 0 : height;
        return sum + width * height;
      }, 0);
    }

    const wallpaperingArea = Math.max(0, totalWallArea - windowArea - doorArea);
    const wallLength = 2 * (length + width);

    const totalStrips = Math.ceil(wallLength / rollWidth);
    let stripsPerRoll = 0;

    if (rollLength > height + rapportValue) {
      stripsPerRoll = Math.floor(rollLength / (height + rapportValue));
    } else {
      stripsPerRoll = 1;
    }

    let rollsNeeded = 0;
    if (stripsPerRoll > 0) {
      rollsNeeded = Math.ceil(totalStrips / stripsPerRoll);
    } else {
      rollsNeeded = totalStrips;
    }

    const totalWallpaperArea = rollsNeeded * rollWidth * rollLength;

    set({
      rollsNeeded: Math.max(0, rollsNeeded),
      gluingArea: Math.max(0, wallpaperingArea),
      totalWallpaperArea: Math.max(0, totalWallpaperArea),
    });
  },
}));
