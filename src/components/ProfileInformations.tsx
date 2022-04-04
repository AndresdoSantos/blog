interface IProfileInformationsProps {
  repositories: number;
  yearsWork: string;
}

export function ProfileInformations({
  repositories,
  yearsWork,
}: IProfileInformationsProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-y-0 mt-14">
      <div className="flex flex-col items-center">
        <strong>{yearsWork}</strong>
        <span className="text-xs lg:text-sm text-slate-500">years of work</span>
      </div>
      <div className="flex flex-col items-center">
        <strong>+{repositories}</strong>
        <span className="text-xs lg:text-sm text-slate-500">
          completed projects
        </span>
      </div>
      <div className="flex flex-col items-center">
        <strong>96</strong>
        <span className="text-xs lg:text-sm text-slate-500">
          satisfied customer
        </span>
      </div>
    </section>
  );
}
