import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './index.scss';
import App from '@app/App';
createRoot(document.getElementById('root')).render(_jsx(BrowserRouter, { basename: "/test-rocket", children: _jsx(App, {}) }));
