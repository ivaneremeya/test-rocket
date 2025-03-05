import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useFieldArray } from 'react-hook-form';
import styles from './Window-Form.module.scss';
import { WindowForm } from './Window-Form';
import { SvgComponent } from '@app/assets/btn-win';
export var WindowSection = function (_a) {
    var title = _a.title, title_btn = _a.title_btn, name = _a.name, register = _a.register, control = _a.control;
    var _b = useFieldArray({
        control: control,
        name: name,
    }), fields = _b.fields, append = _b.append, remove = _b.remove;
    return (_jsxs("div", { className: 'flex--section', children: [_jsx("h2", { children: title }), _jsxs("div", { className: styles.window__section, children: [fields.map(function (field, index) { return (_jsx(WindowForm, { index: index, remove: remove, register: register, name: name }, field.id)); }), _jsxs("button", { className: styles.window__button, type: 'button', onClick: function () { return append({ height: null, width: null }); }, children: [_jsx(SvgComponent, { id: 'svg' }), _jsx("p", { children: title_btn })] })] })] }));
};
