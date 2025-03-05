import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.scss';
import { Route, Routes } from 'react-router';
import { Login } from '../page/login/login';
import { HomePage } from '@page/home/ui/home';
function App() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: '/', element: _jsx(Login, {}) }), _jsx(Route, { path: '/home', element: _jsx(HomePage, {}) })] }));
}
export default App;
