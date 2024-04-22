import './App.scss';
import { HomePage } from './Components/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Phones } from './Components/Phones';
import { ItemCard } from './Components/ItemCard';
import { Favorites } from './Components/Favorites';
import { ShoppingCart } from './Components/ShoppingCart';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/item-card" element={<ItemCard />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
};
