import { useMemo, useState } from 'react';

type TOptions = 'Projects' | 'Skills';

export function Options() {
  const options = useMemo((): TOptions[] => ['Projects', 'Skills'], []);

  const [currentOption, setCurrentOption] = useState<TOptions>('Projects');

  return (
    <div className="flex items-center justify-center w-64 h-14 rounded-md mx-auto mt-14 bg-slate-200 p-2">
      {options.map((option) => (
        <button
          type="button"
          key={option}
          className={`${
            currentOption === option && 'bg-white'
          } rounded-md flex-1 h-full`}
          onClick={() => setCurrentOption(option)}
        >
          <span className="text-sm">{option}</span>
        </button>
      ))}
    </div>
  );
}
