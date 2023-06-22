// import { createContext, useReducer } from "react";
// import DarkModeReducer from "./darkModeReducer";

// const INITIAL_STATE = {
//   darkMode: false,
// };

// export const DarkModeContext = createContext(INITIAL_STATE);

// export const DarkModeContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

//   return (
//     <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };

// DarkModeContext.js

import React, { createContext, useReducer, useEffect } from 'react';
import darkModeReducer from './darkModeReducer';

const INITIAL_STATE = {
  darkMode: false,
};

export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(darkModeReducer, INITIAL_STATE);

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode !== null) {
      const darkMode = storedMode === 'true';
      dispatch({ type: darkMode ? 'DARK' : 'LIGHT' });
    }
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
