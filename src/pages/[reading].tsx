import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Reading: NextPage = () => {
  const { asPath } = useRouter();

  return <span>{asPath}</span>;
};

export default Reading;
