"use client";

import { ModuleLink } from "./module-link";
import { BaseHideoutModuleFieldsFragment } from "../../../infrastructure/graphql/generated/graphql";
import { useSelectedLayoutSegment } from "next/navigation";
import { startTransition, useOptimistic } from "react";

type Props = {
  hideoutModulesList: BaseHideoutModuleFieldsFragment[];
};

export const ModuleMenu = ({ hideoutModulesList }: Props) => {
  const segment = useSelectedLayoutSegment();
  const [segmentOptimistic, setIsActiveOptimistic] = useOptimistic(segment);

  return (
    <div className="top-0 flex w-full shrink-0 flex-wrap justify-center p-2 md:sticky md:w-auto md:max-w-xs md:flex-col">
      {hideoutModulesList.map((module) => {
        if (!module) return null;

        const isActive = module.normalizedName === segmentOptimistic;

        return (
          <ModuleLink
            key={module.id}
            imageLink={module.imageLink}
            name={module.name}
            normalizedName={module.normalizedName}
            isActive={isActive}
            onClick={() =>
              startTransition(() =>
                setIsActiveOptimistic(module.normalizedName),
              )
            }
          />
        );
      })}
    </div>
  );
};
