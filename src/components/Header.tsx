import { Dispatch, useMemo, useState } from 'react';

type Tab = 'Início' | 'Projetos' | 'Livros - O que estou lendo';

type HeaderProps = {
  setCurrentTab: Dispatch<Tab>;
  currentTab: Tab;
};

export function Header({ currentTab, setCurrentTab }: HeaderProps) {
  const tabs = useMemo(
    (): Tab[] => ['Início', 'Projetos', 'Livros - O que estou lendo'],
    []
  );

  return (
    <>
      <div className="flex items-center justify-center py-3 bg-red-500">
        <h1 className="text-xs text-white">Work in progress</h1>
      </div>

      <header className="flex items-center bg-black h-16 px-4">
        <div className="flex items-end">
          <h1 className="text-slate-100 font-medium text-xs tracking-[0.5em]">
            ANDRES
          </h1>
          <h1 className="text-orange-500 font-medium">_</h1>
        </div>

        <nav className="flex items-center space-x-4 ml-20">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`text-slate-100 text-xs ${
                tab === currentTab && 'border-b'
              }`}
              onClick={() => setCurrentTab(tab)}
            >
              <p>{tab}</p>
            </button>
          ))}
        </nav>
      </header>
    </>
  );
}
