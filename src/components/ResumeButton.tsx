import { HiDownload } from 'react-icons/hi';

export function ResumeButton() {
  return (
    <button
      type="button"
      className="flex items-center justify-around bg-cyan-500 h-11 w-40 rounded-md transition duration-500 hover:bg-cyan-600"
    >
      <span className="text-white text-sm">Download CV</span>
      <HiDownload color="#fff" size={20} />
    </button>
  );
}
