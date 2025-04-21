import { HideoutPageHideoutModuleLevel } from '../../../../types';

type Props = {
  skillRequirements: HideoutPageHideoutModuleLevel['skillRequirements'];
  title: string;
};

export const SkillRequirements = ({ skillRequirements, title }: Props) => {
  if (skillRequirements.length === 0) return null;

  return (
    <div>
      <h4 className="text-sm font-medium text-gray-400">{title}</h4>
      <ul className="mt-1 space-y-1">
        {skillRequirements.map((skill) => {
          if (!skill) return null;

          return (
            <li key={skill.name} className="text-sm text-white">
              {skill.name} {skill.level}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
