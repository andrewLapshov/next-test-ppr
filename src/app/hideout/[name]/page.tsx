import { fetchHideoutModulesPageCached } from "../api/server/fetch-hideout-modules";
import { HideoutModuleDetails } from "./ui/hideout-module-details";
import { fetchHideoutItems } from "../api/fetch-hideout";

type Props = {
  params: Promise<{ name: string }>;
};

export const revalidate = 86400;
export const generateStaticParams = async () => {
  const hideoutModulesList = await fetchHideoutItems();

  return hideoutModulesList.data.hideoutStations.map((station) => ({
    name: station?.normalizedName,
  }));
};

const HideoutModulePage = async ({ params }: Props) => {
  const { name: normalizedName } = await params;

  const hideoutModulesData = await fetchHideoutModulesPageCached();
  const moduleData = hideoutModulesData[normalizedName];

  return <HideoutModuleDetails station={moduleData} />;
};

export default HideoutModulePage;
