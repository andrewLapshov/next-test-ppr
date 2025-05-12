'use client';

import { ReactNode } from 'react';

import { DictionariesContext, TDictionariesContext } from './context';

export const DictionariesProvider = ({ children, value }: { children: ReactNode; value: TDictionariesContext }) => (
  <DictionariesContext value={value}>{children}</DictionariesContext>
);
