import { HideoutPageExtModule } from '../../types';
import { HideoutLevelCard } from './hideout-level-card';

type HideoutStationDetailsProps = {
  station: HideoutPageExtModule;
};

export const HideoutModuleDetails = async ({ station }: HideoutStationDetailsProps) => {
  return (
    <div className="grow">
      <h1 className="mb-6 flex items-center justify-center gap-2 text-2xl font-bold md:justify-start md:text-3xl">
        {station.imageLink && <img alt={station.name} className="h-12 w-12" src={station.imageLink} />}
        {station.name}
      </h1>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {station.levels.map((level) => (level ? <HideoutLevelCard key={level.level} level={level} /> : null))}
      </div>
    </div>
  );
};
