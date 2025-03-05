import './App.scss';
import { Route, Routes } from 'react-router';
import { Login } from '../page/login/login';
import { HomePage } from '@page/home/ui/home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<HomePage />} />
    </Routes>
  );
}

export default App;
