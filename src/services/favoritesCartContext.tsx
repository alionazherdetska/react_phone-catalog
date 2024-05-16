import React, { ReactNode, createContext, useState } from 'react';

interface FavoritesCartContextType {
  favorites: string[];
  cartItems: string[];
  addToFavorites: (itemId: string) => void;
  removeFromFavorites: (itemId: string) => void;
  addToCart: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
}

export const FavoritesCartContext = createContext<FavoritesCartContextType>({
  favorites: [],
  cartItems: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
});

export const FavoritesCartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const addToFavorites = (itemId: string) => {
    setFavorites([...favorites, itemId]);
  };

  const removeFromFavorites = (itemId: string) => {
    const newFavorites = favorites.filter(id => id !== itemId);

    setFavorites(newFavorites);
  };

  const addToCart = (itemId: string) => {
    setCartItems([...cartItems, itemId]);
  };

  const removeFromCart = (itemId: string) => {
    const newCartItems = cartItems.filter(id => id !== itemId);

    setCartItems(newCartItems);
  };

  return (
    <FavoritesCartContext.Provider
      value={{
        favorites,
        cartItems,
        addToFavorites,
        removeFromFavorites,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </FavoritesCartContext.Provider>
  );
};
