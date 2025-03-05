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
import styles from './Window-Form.module.scss';
import { SvgComponent } from '@app/assets/btn-win';
export var WindowForm = function (_a) {
    var index = _a.index, remove = _a.remove, register = _a.register, name = _a.name;
    var handleKeyDown = function (event) {
        var invalidChars = ['-', '+', 'e', '.']; // Добавил точку, если она тоже не нужна
        if (invalidChars.includes(event.key)) {
            event.preventDefault();
        }
    };
    return (_jsxs("div", { className: styles.window__form, children: [_jsxs("div", { className: styles.window__header, children: [_jsx("h3", { children: "\u041E\u043A\u043D\u043E " }), _jsx("button", { className: 'button__delete', type: 'button', onClick: function () { return remove(index); }, children: _jsx(SvgComponent, { id: 'delete' }) })] }), _jsxs("div", { className: styles.window__inputs, children: [_jsxs("div", { className: styles.window__input, children: [_jsx("label", { children: "\u0428\u0438\u0440\u0438\u043D\u0430 \u043C" }), _jsx("input", __assign({ className: styles.input_width, type: 'number', placeholder: '0', onKeyDown: handleKeyDown }, register("".concat(name, ".").concat(index, ".width"))))] }), _jsxs("div", { className: styles.window__input, children: [_jsx("label", { children: "\u0412\u044B\u0441\u043E\u0442\u0430 \u043C" }), _jsx("input", __assign({ className: styles.input_width, type: 'number', placeholder: '0', onKeyDown: handleKeyDown }, register("".concat(name, ".").concat(index, ".height"))))] })] })] }));
};
