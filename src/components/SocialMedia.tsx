import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';

export function SocialMedia() {
  return (
    <section className="grid grid-cols-3 gap-x-4 mt-8 lg:mt-0">
      <IoLogoInstagram
        size={20}
        className="cursor-pointer transform duration-300 hover:scale-110 hover:text-[#F77737]"
      />
      <IoLogoLinkedin
        size={20}
        className="cursor-pointer transform duration-300 hover:scale-110 hover:text-sky-700"
      />
      <IoLogoGithub
        size={20}
        className="cursor-pointer transform duration-300 hover:scale-110 hover:text-slate-800"
      />
    </section>
  );
}
