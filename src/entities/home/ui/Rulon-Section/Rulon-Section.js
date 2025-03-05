import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { rapportOptions, rollWidthOptions } from '@shared/const';
import { RadioGroupSection } from './RadioGroupSection';
import styles from './RadioGroupSection.module.scss';
export var RulonSection = function (_a) {
    var control = _a.control;
    return (_jsxs("div", { className: styles.radio__section, children: [_jsx(RadioGroupSection, { title: '\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0440\u0443\u043B\u043E\u043D\u0430', name: 'rollWidth', options: rollWidthOptions, control: control }), _jsx(RadioGroupSection, { title: '\u0420\u0430\u043F\u043F\u043E\u0440\u0442', name: 'rapport', options: rapportOptions, control: control })] }));
};
