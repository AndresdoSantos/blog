/* eslint-disable jsx-a11y/alt-text */
import { useMemo, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

type Tab = 'Início' | 'Projetos' | 'Livros - O que estou lendo';

const Home: NextPage = () => {
  const tabs = useMemo(
    (): Tab[] => ['Início', 'Projetos', 'Livros - O que estou lendo'],
    []
  );

  const { push } = useRouter();

  const [currentTab, setCurrentTab] = useState<Tab>('Início');

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

      {currentTab === 'Início' && (
        <div className="mt-10 mx-auto max-w-5xl">
          <div className="bg-black p-4 w-60">
            <h1 className="font-bold text-white text-2xl">
              Tudo o que eu sei sobre programação{' '}
              <h1 className="text-orange-500 font-medium">_</h1>
            </h1>
          </div>

          <ul className="mt-10">
            <li className="my-5">
              <h1>Por que usar React para MVP?</h1>
              <p className="text-xs text-gray-500">
                Além de ser performático o universo React traz muitas opções
                para quem quer trabalhar com MVP.
              </p>
            </li>

            <li>
              <h1>Svelte, um guia completo para iniciar</h1>
              <p className="text-xs text-gray-500">
                Svelte é um framework performático ótimo para trabalhar com
                JavaScript.
              </p>
            </li>
          </ul>
        </div>
      )}

      {currentTab === 'Projetos' && (
        <div className="mt-10 mx-auto max-w-5xl">
          <div className="bg-black p-4 w-60">
            <h1 className="font-bold text-white text-2xl">
              Meus projetos do Github{' '}
              <h1 className="text-orange-500 font-medium">_</h1>
            </h1>
          </div>

          <ul className="mt-10">
            <li className="my-5">
              <h1>Wallet</h1>
              <p className="text-xs text-gray-500">
                Wallet é um app que busca te ajudar no controle financeiro.
              </p>
            </li>
          </ul>
        </div>
      )}

      {currentTab === 'Livros - O que estou lendo' && (
        <div className="mt-10 mx-auto max-w-5xl">
          <div className="bg-black p-4 w-60">
            <h1 className="font-bold text-white text-2xl">
              O que eu ando lendo{' '}
              <h1 className="text-orange-500 font-medium">_</h1>
            </h1>
          </div>

          <ul className="mt-10">
            <li className="my-5">
              <h1>Biografia Steve Jobs</h1>
              <p className="text-xs text-gray-500">
                Steve Jobs saiu da Atari para fazer uma viagem a Índia em busca
                de salvação.
              </p>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Home;
