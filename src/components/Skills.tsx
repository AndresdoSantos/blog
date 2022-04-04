import { SkillCard } from './SkillCard';

export function Skills() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-around mt-14">
      <div className="flex flex-col items-center justify-center mt-7 lg:mt-0">
        <strong>Frontend developer</strong>

        <div className="grid grid-cols-2 gap-4 mt-7">
          <SkillCard level="Intermediate" title="react" />
          <SkillCard level="Intermediate" title="html" />
          <SkillCard level="Basic" title="css" />
          <SkillCard level="Intermediate" title="javascript" />
          <SkillCard level="Intermediate" title="typescript" />
          <SkillCard level="Intermediate" title="nextjs" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-7 lg:mt-0">
        <strong>Backend developer</strong>

        <div className="grid grid-cols-2 gap-4 mt-7">
          <SkillCard level="Basic" title="nodejs" />
          <SkillCard level="Basic" title="docker" />
        </div>
      </div>
    </div>
  );
}
