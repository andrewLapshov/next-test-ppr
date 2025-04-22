import { HideoutPageHideoutModuleLevel } from "../../../types";
import { Bonuses } from "./ui/bonuses";
import { ConstructionTime } from "./ui/construction-time";
import { Description } from "./ui/description";
import { ModuleRequirements } from "./ui/module-requirements";
import { SkillRequirements } from "./ui/skill-requirements";
import { TraderRequirements } from "./ui/trader-requirements";

type Props = {
  level: HideoutPageHideoutModuleLevel;
};

export const HideoutLevelCard = async ({ level }: Props) => {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-gray-700 bg-gray-800 shadow-lg transition-colors hover:border-gray-500">
      <div className="bg-gray-700 px-4 py-3">
        <h3 className="text-xl font-bold text-white">level {level.level}</h3>
      </div>

      <div className="space-y-4 p-4">
        <ConstructionTime
          constructionTime={level.constructionTime}
          title={"constructionTime"}
        />
        <Description description={level.description} title={"description"} />

        {/*<ItemRequirements entityId={level.id} itemRequirements={level.itemRequirements} title={'requiredItems'} />*/}
        <ModuleRequirements
          moduleRequirements={level.stationLevelRequirements}
          title={"requiredModules"}
        />
        <SkillRequirements
          skillRequirements={level.skillRequirements}
          title={"requiredSkills"}
        />
        <TraderRequirements
          title={"requiredTraders"}
          traderRequirements={level.traderRequirements}
        />

        <Bonuses bonuses={level.bonuses} title={"bonuses"} />
      </div>
    </div>
  );
};
