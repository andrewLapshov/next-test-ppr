// import { Locale } from 'infrastructure/locale';
//
// import { DynamicItemRequirements } from 'features/counter/ui/dynamic-item-requirements';
// import { CraftIcon } from 'features/item/ui/craft-icon';
// import { FoundInRaidIcon } from 'features/item/ui/found-in-raid-icon';
// import { Link } from 'infrastructure/locale/config/routing';
// import { getLocale } from 'next-intl/server';
//
// import { fetchItemsTrackerListCached } from '../../../../../items-tracker/api/server/fetch-items-tracker-list';
// import { HideoutPageHideoutModuleLevel } from '../../../../types';
//
// type Props = {
//   entityId: string;
//   itemRequirements: HideoutPageHideoutModuleLevel['itemRequirements'];
//   title: string;
// };
//
// export const ItemRequirements = async ({ entityId, itemRequirements, title }: Props) => {
//   if (!itemRequirements || itemRequirements.length === 0) return null;
//
//   const locale = (await getLocale()) as Locale;
//
//   const fullTrackerItemsData = await fetchItemsTrackerListCached(locale);
//
//   const { fullItemsDataMap } = fullTrackerItemsData;
//
//   return (
//     <div>
//       <h4 className="text-sm font-medium text-gray-400">{title}</h4>
//       <div className="mt-2 flex flex-wrap gap-1">
//         {itemRequirements.map((itemData) => {
//           if (!itemData) return null;
//
//           const { iconLink, id: itemId, isCraft, name, normalizedName, shortName } = itemData.item;
//
//           const trackerItemData = fullItemsDataMap[itemId];
//
//           if (!trackerItemData) return null;
//
//           const hideoutExtraData = trackerItemData.hideoutExtraData[entityId];
//
//           return (
//             <div
//               key={itemId}
//               className="requirement-card flex flex-col items-center justify-center p-1"
//               title={name || ''}
//             >
//               <span className="flex gap-1 text-center text-sm">
//                 {shortName}
//                 {isCraft && <CraftIcon />}
//               </span>
//
//               {iconLink && (
//                 <Link className="relative" href={`/item/${normalizedName}`} prefetch={false} target="_blank">
//                   <img
//                     alt={name || ''}
//                     className="inline-block h-auto max-h-[100px] max-w-full min-w-8 transition-opacity hover:opacity-70"
//                     src={iconLink}
//                   />
//                   <FoundInRaidIcon className="absolute right-1 bottom-1" />
//                 </Link>
//               )}
//
//               <DynamicItemRequirements entityId={entityId} extraData={hideoutExtraData} itemId={itemId} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
