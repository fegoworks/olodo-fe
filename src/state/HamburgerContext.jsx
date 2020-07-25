/** @format */

import React, { createContext, useState } from 'react';

const initialState = {
  open: false,
  toggle: () => {},
};

export const HamburgerContext = createContext(initialState);

export function HamburgerProvider({ children }) {
  const [open, setOpen] = useState(false);

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
