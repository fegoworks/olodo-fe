/** @format */

import React, { createContext, useState, useEffect } from 'react';

const initialState = {
  isOpen: false,
  toggle: () => {},
};

const HamburgerContext = createContext(initialState);

function HamburgerProvider({ children }) {
  const [open, setOpen] = useState(false); // Default theme is light

  // On mount, read the preferred theme from the persistence
  useEffect(() => {
    const isOpen = true;
    setOpen(isOpen);
  }, [open]);

  // To toggle between open and light modes
  const toggle = () => {
    const isOpen = !open;
    setOpen(isOpen);
  };

  return (
    <HamburgerContext.Provider
      value={{
        open,
        toggle,
      }}
    >
      {children}
    </HamburgerContext.Provider>
  );
}

export { HamburgerProvider, HamburgerContext };
