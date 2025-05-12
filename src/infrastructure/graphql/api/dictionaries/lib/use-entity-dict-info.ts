'use client';

import { useDictionaries } from './context';
import { getEntityDictInfo } from './get-entity-dict-info';

export const useEntityDictInfo = () => {
  const dictionaries = useDictionaries();

  return getEntityDictInfo(dictionaries);
};
