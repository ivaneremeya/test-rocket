var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import { useId } from 'react';
import styles from './input.module.scss';
export function UiInput(_a) {
    var error = _a.error, className = _a.className, label = _a.label, inputProps = _a.inputProps;
    var id = useId();
    var handleKeyDown = function (event) {
        var invalidChars = ['-', '+', 'e', '.']; // Добавил точку, если она тоже не нужна
        if (invalidChars.includes(event.key)) {
            event.preventDefault();
        }
    };
    return (_jsxs("div", { className: styles.wrapper, children: [label && (_jsx("label", { htmlFor: id, className: styles.label, children: label })), _jsx("input", __assign({}, inputProps, { id: id, className: clsx(className, styles.input), onKeyDown: handleKeyDown })), error && _jsxs("div", { className: styles.error, children: [" ", error, " "] })] }));
}
