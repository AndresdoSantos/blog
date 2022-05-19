import { GetStaticProps, NextPage } from 'next';
import { Header } from '../components/Header';

type Repo = {
  id: number;
  description: string;
  updated_at: string;
  name: string;
};

const Projects: NextPage<{ data: Repo[] }> = ({ data }) => {
  return (
    <>
      <Header currentTab="Projetos" setCurrentTab={() => {}} />

      <div className="mt-10 mx-auto max-w-5xl">
        <div className="grid grid-cols-3 gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-start bg-black h-8 px-4"
            >
              <span className="text-sm text-white">
                {item.name.replaceAll('-', ' ')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch(
    'https://api.github.com/users/AndresdoSantos/repos?per_page=100'
  ).then((response) => response.json());

  return {
    props: { data },
    revalidate: 60 * 60 * 3, // 3 hours
  };
};

export default Projects;
