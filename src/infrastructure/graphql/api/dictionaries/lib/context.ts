'use client';

import { createContext, use } from 'react';

import { Dictionaries } from '../types/dictionaries';

export type TDictionariesContext = Dictionaries;

export const DictionariesContext = createContext<TDictionariesContext | null>(null);

export const useDictionaries = () => {
  const dictionaries = use(DictionariesContext);

  if (!dictionaries) {
    throw new Error('Dictionaries not found');
  }

  return dictionaries;
};

export const useTrader = (normalizedName: string) => {
  const { traders } = useDictionaries();

  return traders[normalizedName]!;
};
