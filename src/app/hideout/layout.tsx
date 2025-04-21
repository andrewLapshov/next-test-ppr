import { PropsWithChildren } from "react";

import { ModuleLink } from "./ui/module-link";
import { fetchHideoutItems } from "./api/fetch-hideout";

export const revalidate = 86_400;
export const generateStaticParams = () => [];

const HideoutLayout = async ({ children }: PropsWithChildren) => {
  const hideoutModulesList = await fetchHideoutItems();

  return (
    <div className="flex w-full flex-col items-start gap-4 md:flex-row">
      <div className="top-0 flex w-full shrink-0 flex-wrap justify-center p-2 md:sticky md:w-auto md:max-w-xs md:flex-col">
        {hideoutModulesList.data.hideoutStations.map((module) => {
          if (!module) return null;

          return (
            <ModuleLink
              key={module.id}
              imageLink={module.imageLink}
              name={module.name}
              normalizedName={module.normalizedName}
            />
          );
        })}
      </div>

      {children}
    </div>
  );
};

export default HideoutLayout;
