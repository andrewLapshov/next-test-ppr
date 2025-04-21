import { HideoutPageHideoutModuleLevel } from '../../../../types';

type Props = {
  title: string;
  traderRequirements: HideoutPageHideoutModuleLevel['traderRequirements'];
};

export const TraderRequirements = ({ title, traderRequirements }: Props) => {
  if (traderRequirements.length === 0) return null;

  return (
    <div>
      <h4 className="text-sm font-medium text-gray-400">{title}</h4>
      <ul className="mt-1 space-y-1">
        {traderRequirements.map((requirement) => {
          if (!requirement) return null;

          const { compareMethod, id, trader, value } = requirement;

          return (
            <li key={id} className="text-sm text-white">
              <div className="flex items-center gap-1">
                {trader.imageLink && <img alt={trader.name || ''} className="h-8 w-8" src={trader.imageLink} />}
                {trader.name} {compareMethod} {value}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
