import { IoLogoWhatsapp } from 'react-icons/io5';
import { FaFacebookMessenger } from 'react-icons/fa';

import { ResumeButton } from './ResumeButton';

export function Contact() {
  return (
    <div className="flex items-center justify-center space-x-4 mx-auto mt-14">
      <ResumeButton />

      <button
        type="button"
        className="flex items-center justify-center h-11 w-11 bg-slate-200 rounded-md transition duration-300 hover:bg-slate-300"
      >
        <IoLogoWhatsapp />
      </button>

      <button
        type="button"
        className="flex items-center justify-center h-11 w-11 bg-slate-200 rounded-md transition duration-300 hover:bg-slate-300"
      >
        <FaFacebookMessenger />
      </button>
    </div>
  );
}
