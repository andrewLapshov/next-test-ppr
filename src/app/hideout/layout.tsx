import { PropsWithChildren } from "react";

import { fetchHideoutItems } from "./api/fetch-hideout";
import { ModuleMenu } from "./ui/module-menu";

export const revalidate = 86400;
export const generateStaticParams = () => [];

const HideoutLayout = async ({ children }: PropsWithChildren) => {
  const hideoutModulesList = await fetchHideoutItems();

  return (
    <div className="flex w-full flex-col items-start gap-4 md:flex-row">
      <ModuleMenu
        hideoutModulesList={hideoutModulesList.data.hideoutStations}
      />

      {children}
    </div>
  );
};

export default HideoutLayout;
