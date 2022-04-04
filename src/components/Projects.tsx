import Link from 'next/link';

interface IProjectsProps {
  repos: { name: string; description: string; clone_url: string }[];
}

export function Projects({ repos }: IProjectsProps) {
  return (
    <div className="flex items-center justify-center mt-14">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {repos.map((repo) => (
          <Link key={repo.name} href={repo.clone_url}>
            <a
              target="_blank"
              className="flex flex-col items-start border h-auto p-4 rounded-md transition duration-300 hover:shadow-lg"
            >
              <span className="text-sm mb-4">{repo.name.toUpperCase()}</span>
              <span className="text-xs text-slate-500">{repo.description}</span>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
