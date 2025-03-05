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
import { UiInput } from '@shared/ui/input/ui-input';
import styles from './roomParams.module.scss';
export var RoomParametersForm = function (_a) {
    var _b, _c, _d;
    var register = _a.register, errors = _a.errors;
    return (_jsxs("div", { className: 'flex--section', children: [_jsx("h2", { children: "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043A\u043E\u043C\u043D\u0430\u0442\u044B" }), _jsxs("div", { className: styles.wrapper, children: [_jsx(UiInput, { className: styles.input_width, label: '\u0414\u043B\u0438\u043D\u0430 \u043C ', error: (_b = errors === null || errors === void 0 ? void 0 : errors.length) === null || _b === void 0 ? void 0 : _b.message, inputProps: __assign({ type: 'number', id: 'length', min: '0' }, register('length', {
                            required: 'Длина обязательна для заполнения',
                            valueAsNumber: true,
                            min: {
                                value: 0,
                                message: 'Длина должна быть неотрицательным числом',
                            },
                        })) }), _jsx(UiInput, { className: styles.input_width, label: '\u0428\u0438\u0440\u0438\u043D\u0430 \u043C ', error: (_c = errors === null || errors === void 0 ? void 0 : errors.width) === null || _c === void 0 ? void 0 : _c.message, inputProps: __assign({ type: 'number', id: 'width', min: '0' }, register('width', {
                            required: 'Ширина обязательна для заполнения',
                            valueAsNumber: true,
                            min: {
                                value: 0,
                                message: 'Ширина должна быть неотрицательным числом',
                            },
                        })) }), _jsx(UiInput, { className: styles.input_width, label: '\u0412\u044B\u0441\u043E\u0442\u0430 \u043C', error: (_d = errors === null || errors === void 0 ? void 0 : errors.height) === null || _d === void 0 ? void 0 : _d.message, inputProps: __assign({ type: 'number', id: 'height', min: '0' }, register('height', {
                            required: 'Высота обязательна для заполнения',
                            valueAsNumber: true,
                            min: {
                                value: 0,
                                message: 'Высота должна быть неотрицательным числом',
                            },
                        })) })] })] }));
};
