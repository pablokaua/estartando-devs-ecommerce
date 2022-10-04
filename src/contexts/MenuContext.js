import { useState } from 'react';
import { createContext } from 'react';
import React from 'react';

export const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const toggleVisible = () => {
    setMenuIsVisible(!menuIsVisible);
  };

  return (
    <MenuContext.Provider value={{ menuIsVisible, toggleVisible }}>
      {children}
    </MenuContext.Provider>
  );
};
