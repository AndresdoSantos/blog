import { BsCheck2Circle } from 'react-icons/bs';

interface ISkillCardProps {
  title: string;
  level: 'Basic' | 'Intermediate' | 'Advanced';
}

export function SkillCard({ level, title }: ISkillCardProps) {
  return (
    <div className="flex items-start justify-start space-x-2 p-2">
      <BsCheck2Circle className="text-cyan-500 mt-1" />

      <div className="flex flex-col items-start">
        <span className="text-sm">{title.toUpperCase()}</span>
        <span className="text-xs text-slate-500">{level}</span>
      </div>
    </div>
  );
}
