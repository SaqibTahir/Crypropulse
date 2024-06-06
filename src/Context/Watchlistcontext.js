import React, { createContext, useState, useEffect } from 'react';

// Create Context
export const WatchlistContext = createContext();

// Provider Component
export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  // Load watchlist from localStorage
  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    setWatchlist(storedWatchlist);
  }, []);

  // Save watchlist to localStorage
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (coin) => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, coin]);
  };

  const removeFromWatchlist = (id) => {
    setWatchlist((prevWatchlist) => prevWatchlist.filter(coin => coin.id !== id));
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};
