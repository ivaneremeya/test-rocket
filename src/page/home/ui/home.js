import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styles from './home.module.scss';
import { useNavigate } from 'react-router';
import { RoomParametersForm } from '@entities/home/ui/Room-Section/RoomParametersForm';
import { RulonSection } from '@entities/home/ui/Rulon-Section/Rulon-Section';
import { WindowSection } from '@entities/home/ui/WIndow-Section/Window-Section';
import { CalculationResults } from '@entities/home/ui/CalculationResults-Section/CalculationResults';
import { SvgComponent } from '@app/assets/btn-win';
import { useCalculationStore } from '../model/useCalculationStore';
export var HomePage = function () {
    var navigate = useNavigate();
    var _a = useState(false), isShowingResults = _a[0], setIsShowingResults = _a[1];
    var _b = useCalculationStore(), calculate = _b.calculate, rollsNeeded = _b.rollsNeeded, gluingArea = _b.gluingArea, totalWallpaperArea = _b.totalWallpaperArea;
    var _c = useState(window.innerWidth <= 768), isMobile = _c[0], setIsMobile = _c[1];
    var _d = useForm(), register = _d.register, handleSubmit = _d.handleSubmit, errors = _d.formState.errors, control = _d.control, reset = _d.reset, setValue = _d.setValue;
    var onSubmit = function (data) {
        console.log('Form data:', data);
        calculate(data);
        setIsShowingResults(true);
    };
    var handleReset = function () {
        reset();
        setValue('rollWidth', '');
        setValue('rapport', '');
        setIsShowingResults(false);
    };
    useEffect(function () {
        var handleResize = function () {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return function () {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (_jsxs("form", { className: styles.wrapper, onSubmit: handleSubmit(onSubmit), children: [_jsx(RoomParametersForm, { register: register, errors: errors }), _jsx(RulonSection, { control: control }), _jsxs("div", { className: styles.windows_container, children: [_jsx(WindowSection, { name: 'windows', title: 'Параметры окон', register: register, control: control, title_btn: 'Добавить окно' }), _jsx(WindowSection, { name: 'doors', title: 'Параметры дверей', title_btn: 'Добавить дверь', register: register, control: control })] }), isShowingResults ? (_jsx(CalculationResults, { result: { rollsNeeded: rollsNeeded, gluingArea: gluingArea, totalWallpaperArea: totalWallpaperArea }, onReset: handleReset })) : (_jsx("div", { className: styles.btn_wrapper, children: _jsx("button", { className: 'button', type: 'submit', children: isMobile ? 'Расчет материалов' : 'Начать расчет материалов' }) })), _jsx("div", { className: styles.btn__position, children: _jsx("button", { className: 'button__delete', type: 'button', onClick: function () { return navigate('/'); }, children: _jsx(SvgComponent, { id: 'delete' }) }) })] }));
};
