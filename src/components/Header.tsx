/* eslint-disable jsx-a11y/alt-text */
// import { useContext } from 'react';
// import { MdDarkMode } from 'react-icons/md';

// import { ThemeContext } from '../contexts/ThemeContext';

import { Image } from './Image';
import { SocialMedia } from './SocialMedia';

export function Header() {
  // const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  return (
    <header className="flex flex-col lg:flex-row items-center justify-between pt-8">
      <div className="flex items-center mr-auto lg:mr-0">
        <Image />

        <div className="flex flex-col ml-6">
          <strong className="text-xl">Andres Amaral</strong>
          <span className="text-xs text-slate-600">
            Web and mobile developer.
          </span>
        </div>
      </div>

      <SocialMedia />

      {/**<button type="button" onClick={() => setIsDarkMode(!isDarkMode)}>
        <MdDarkMode />
      </button> */}
    </header>
  );
}
