import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './index.scss';
import App from '@app/App';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename='/test-rocket'>
    <App />
  </BrowserRouter>,
);
