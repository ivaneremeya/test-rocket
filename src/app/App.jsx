import { Routes, Route } from 'react-router-dom';
import LoginPage from './page/login/LoginPage';
import HomePage from './page/home/ui/HomePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/home' element={<HomePage />} />
    </Routes>
  );
}

export default App;
