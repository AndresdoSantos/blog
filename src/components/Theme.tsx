import { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';

export function Theme({ children }: { children: JSX.Element }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <main
      className={`${
        isDarkMode ? 'bg-[#2c2c2c]' : 'bg-slate-50'
      } min-h-screen h-full w-screen`}
    >
      <div className="p-6 lg:mx-auto lg:w-[1120px]">{children}</div>
    </main>
  );
}
