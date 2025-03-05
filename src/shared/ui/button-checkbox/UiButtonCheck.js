import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import styles from './UiButtonCheck.module.scss';
export var UiButtonCheck = function (_a) {
    var className = _a.className, value = _a.value, name = _a.name, field = _a.field, style = _a.style;
    var isSelected = field.value === value;
    return (_jsxs("label", { style: style, className: clsx(className, styles.uiButtonCheck, isSelected && styles.uiButtonChecked), children: [_jsx("input", { className: styles.radioButton, type: 'radio', value: value, name: name, checked: isSelected, onChange: field.onChange }), value] }));
};
