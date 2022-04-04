/* eslint-disable jsx-a11y/alt-text */
import type { GetStaticProps, NextPage } from 'next';

import { Contact } from '../components/Contact';
import { Header } from '../components/Header';
import { Options } from '../components/Options';
import { ProfileInformations } from '../components/ProfileInformations';
import { Projects } from '../components/Projects';
import { Theme } from '../components/Theme';

interface IHomeProps {
  data: {
    repositories: [];
    publicRepos: number;
    yearsInGithub: string;
  };
}

const Home: NextPage<IHomeProps> = ({ data }) => {
  return (
    <Theme>
      <>
        <Header />

        <ProfileInformations
          repositories={data.publicRepos}
          yearsWork={data.yearsInGithub}
        />

        {console.log(data)}

        <Contact />

        <Options />

        <Projects repos={data.repositories} />
      </>
    </Theme>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const repositories = await fetch(
    'https://api.github.com/users/AndresdoSantos/repos'
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then((data) => data);

  const publicRepos = await fetch('https://api.github.com/users/AndresdoSantos')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then((data) => data);

  return {
    props: {
      data: {
        repositories,
        publicRepos: publicRepos.public_repos,
        yearsInGithub: `${
          +publicRepos.updated_at.split('-')[0] -
          +publicRepos.created_at.split('-')[0]
        }`,
      },
    },
    revalidate: 60 * 60 * 60 * 3, // 3 hours
  };
};

export default Home;
