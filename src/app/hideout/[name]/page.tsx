"use cache";

import { HideoutModuleDetails } from "./ui/hideout-module-details";
import { fetchHideoutItems } from "../api/fetch-hideout";
import { fetchHideoutModulesPage } from "../api/server/fetch-hideout-modules";

type Props = {
  params: Promise<{ name: string }>;
};

export const generateStaticParams = async () => {
  const hideoutModulesList = await fetchHideoutItems();

  return hideoutModulesList.data.hideoutStations.map((station) => ({
    name: station?.normalizedName,
  }));
};

const HideoutModulePage = async ({ params }: Props) => {
  const { name: normalizedName } = await params;

  const hideoutModulesData = await fetchHideoutModulesPage();
  const moduleData = hideoutModulesData[normalizedName];

  return <HideoutModuleDetails station={moduleData} />;
};

export default HideoutModulePage;
