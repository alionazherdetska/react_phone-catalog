import './App.scss';
import { HomePage } from './Components/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Phones } from './Components/Phones';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phones" element={<Phones />} />
      </Routes>
    </BrowserRouter>
  );
};
