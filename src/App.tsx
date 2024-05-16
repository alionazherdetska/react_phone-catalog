import './App.scss';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './Components/Layout';
import { HomePage } from './Components/HomePage';
import { Phones } from './Components/Phones';
import { ItemCard } from './Components/ItemCard';
import { Favorites } from './Components/Favorites';
import { ShoppingCart } from './Components/ShoppingCart';
import { AsideMenu } from './Components/AsideMenu';
import { Tablets } from './Components/Tablets';
import { Accessories } from './Components/Accessories';
import { FavoritesCartProvider } from './services/favoritesCartContext';

export const App = () => {
  return (
    <FavoritesCartProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/phones" element={<Phones />} />
            <Route path="/phones/:page" element={<Phones />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/tablets" element={<Tablets />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/item-card/:itemId" element={<ItemCard />} />
            <Route path="/favorites" element={<Favorites />} />
          </Route>
          <Route path="/menu" element={<AsideMenu />} />
        </Routes>
      </Router>
    </FavoritesCartProvider>
  );
};
