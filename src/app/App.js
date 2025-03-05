import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './page/login/LoginPage';
import HomePage from './page/home/ui/HomePage';

function App() {
  return (
    <BrowserRouter basename='/test-rocket'>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
