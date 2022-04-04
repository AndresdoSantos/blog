import { createContext, Dispatch, useReducer, useState } from 'react';

interface ThemeContextData {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<boolean>;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: { children: JSX.Element }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
