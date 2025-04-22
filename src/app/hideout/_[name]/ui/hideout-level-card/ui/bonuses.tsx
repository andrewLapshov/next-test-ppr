import cn from 'clsx';

import { HideoutPageHideoutModuleLevel } from '../../../../types';

type Props = {
  bonuses: HideoutPageHideoutModuleLevel['bonuses'];
  title: string;
};

export const Bonuses = ({ bonuses, title }: Props) => {
  if (!bonuses || bonuses.length === 0 || !bonuses.every((bonus) => bonus?.value)) return null;

  return (
    <div>
      <h4 className="text-sm font-medium text-gray-400">{title}</h4>
      <ul className="mt-1 space-y-1">
        {bonuses.map((bonus) => {
          if (!bonus || !bonus.value) return null;

          return (
            <li key={bonus.name} className="flex items-center gap-2 text-sm text-white">
              <span className={cn('h-2 w-2 shrink-0 rounded-full', bonus.passive ? 'bg-blue-400' : 'bg-green-400')} />
              {bonus.name}: {bonus.value && bonus.value > 0 ? '+' : ''}
              {bonus.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
