
import { HideoutExtItem } from '../../../types';
import { BaseHideoutItemFieldsFragment } from "../../../../../infrastructure/graphql/generated/graphql";

export const prepareExtItem = (item: BaseHideoutItemFieldsFragment): HideoutExtItem => {
  const { craftsFor, ...restItem } = item;

  return { ...restItem, isCraft: Boolean(craftsFor?.length) };
};
