import { HideoutPageHideoutModuleLevel } from '../../../../types';

type Props = {
  moduleRequirements: HideoutPageHideoutModuleLevel['stationLevelRequirements'];
  title: string;
};

export const ModuleRequirements = ({ moduleRequirements, title }: Props) => {
  if (moduleRequirements.length === 0) return null;

  return (
    <div>
      <h4 className="text-sm font-medium text-gray-400">{title}</h4>
      <ul className="mt-1 space-y-1">
        {moduleRequirements.map((module) => {
          if (!module) return null;

          return (
            <div key={module.id} className="flex items-center gap-1">
              {module.station.imageLink && (
                <img alt={module.station.name || ''} className="h-8 w-8" src={module.station.imageLink} />
              )}
              <li className="text-sm text-white">
                {module.station.name} {module.level}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
