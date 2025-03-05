import { create } from 'zustand';
export var useCalculationStore = create(function (set) { return ({
    rollsNeeded: 0,
    gluingArea: 0,
    totalWallpaperArea: 0,
    calculate: function (data) {
        console.log('Входные данные:', data);
        var rollWidthMatch = data.rollWidth.match(/([\d.]+) x/);
        var rollLengthMatch = data.rollWidth.match(/x ([\d.]+)m/);
        var rollWidth = rollWidthMatch && rollWidthMatch[1] ? parseFloat(rollWidthMatch[1]) : NaN;
        var rollLength = rollLengthMatch && rollLengthMatch[1] ? parseFloat(rollLengthMatch[1]) : NaN;
        rollWidth = isNaN(rollWidth) || rollWidth <= 0 ? 0 : rollWidth;
        rollLength = isNaN(rollLength) || rollLength <= 0 ? 0 : rollLength;
        var length = data.length, width = data.width, height = data.height;
        if (length <= 0 || width <= 0 || height <= 0) {
            console.error('Некорректные размеры комнаты.');
            set({ rollsNeeded: 0, gluingArea: 0, totalWallpaperArea: 0 });
            return;
        }
        var rapportValue = parseFloat(data.rapport);
        if (isNaN(rapportValue) || rapportValue < 0) {
            console.error('Некорректный раппорт.');
            return;
        }
        var perimeter = 2 * (length + width);
        var totalWallArea = perimeter * height;
        var windowArea = 0;
        if (data.windows && data.windows.length > 0) {
            windowArea = data.windows.reduce(function (sum, window) {
                var width = parseFloat(window.width);
                var height = parseFloat(window.height);
                width = isNaN(width) || width <= 0 ? 0 : width;
                height = isNaN(height) || height <= 0 ? 0 : height;
                return sum + width * height;
            }, 0);
        }
        var doorArea = 0;
        if (data.doors && data.doors.length > 0) {
            doorArea = data.doors.reduce(function (sum, door) {
                var width = parseFloat(door.width);
                var height = parseFloat(door.height);
                width = isNaN(width) || width <= 0 ? 0 : width;
                height = isNaN(height) || height <= 0 ? 0 : height;
                return sum + width * height;
            }, 0);
        }
        var wallpaperingArea = Math.max(0, totalWallArea - windowArea - doorArea);
        var wallLength = 2 * (length + width);
        var totalStrips = Math.ceil(wallLength / rollWidth);
        var stripsPerRoll = 0;
        if (rollLength > height + rapportValue) {
            stripsPerRoll = Math.floor(rollLength / (height + rapportValue));
        }
        else {
            stripsPerRoll = 1;
        }
        var rollsNeeded = 0;
        if (stripsPerRoll > 0) {
            rollsNeeded = Math.ceil(totalStrips / stripsPerRoll);
        }
        else {
            rollsNeeded = totalStrips;
        }
        var totalWallpaperArea = rollsNeeded * rollWidth * rollLength;
        set({
            rollsNeeded: Math.max(0, rollsNeeded),
            gluingArea: Math.max(0, wallpaperingArea),
            totalWallpaperArea: Math.max(0, totalWallpaperArea),
        });
    },
}); });
