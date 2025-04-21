
import { HideoutPageExtModule } from '../../../types';
import { prepareExtItem } from './prepare-ext-item';
import { BaseHideoutModuleFieldsFragment } from "../../../../../infrastructure/graphql/generated/graphql";

export const prepareHideoutModules = (module: BaseHideoutModuleFieldsFragment): HideoutPageExtModule => {
  return {
    ...module,
    levels: module.levels.map((level) => {
      if (!level) return null;

      return {
        ...level,
        itemRequirements: level?.itemRequirements.map((item) => {
          if (!item) return null;

          return {
            ...item,
            item: prepareExtItem(item.item),
          };
        }),
      };
    }),
  };
};
