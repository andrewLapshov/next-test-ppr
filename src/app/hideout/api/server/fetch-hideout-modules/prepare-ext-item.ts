import { BaseHideoutItemFieldsFragment } from 'infrastructure/graphql/generated/graphql';

import { HideoutExtItem } from '../../../types';

export const prepareExtItem = (item: BaseHideoutItemFieldsFragment): HideoutExtItem => {
  const { craftsFor, ...restItem } = item;

  return { ...restItem, isCraft: Boolean(craftsFor?.length) };
};
