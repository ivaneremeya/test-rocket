import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import clsx from 'clsx';
import styles from './RadioGroupSection.module.scss';
import { useController } from 'react-hook-form';
import { UiButtonCheck } from '@shared/ui/button-checkbox/UiButtonCheck';
export var RadioGroupSection = function (_a) {
    var className = _a.className, title = _a.title, name = _a.name, options = _a.options, control = _a.control;
    var field = useController({
        name: name,
        control: control,
    }).field;
    return (_jsxs("div", { className: clsx(className, styles.radio_container, 'flex--section'), children: [_jsx("h2", { children: title }), _jsx("div", { className: clsx(className, styles.wrapper), children: options.map(function (option) { return (_jsx(React.Fragment, { children: _jsx(UiButtonCheck, { className: className, value: option.value, name: name, field: field, style: option.style }) }, option.value)); }) })] }));
};
