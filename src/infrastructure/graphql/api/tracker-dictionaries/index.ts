import { Locale } from '../../../locale';
import { getClient } from '../../config';
import { FleaQuery } from './flea-query';
import { HideoutQuery } from './hideout-query';
import { TradersQuery } from './traders-query';

export const fetchHideoutDictionary = (locale: Locale) => {
  return getClient().query({
    query: HideoutQuery,
    context: {
      fetchOptions: {
        cache: 'force-cache',
        next: {
          revalidate: 60 * 60 * 24 * 7, // 1 неделя
        },
      },
    },
    variables: { lang: locale },
  });
};

export const fetchTradersDictionary = (locale: Locale) => {
  return Promise.all([
    getClient().query({
      query: TradersQuery,
      context: {
        fetchOptions: {
          cache: 'force-cache',
          next: {
            revalidate: 60 * 60 * 24 * 7, // 1 неделя
          },
        },
      },
      variables: { lang: locale },
    }),
    getClient().query({
      query: FleaQuery,
      context: {
        fetchOptions: {
          cache: 'force-cache',
          next: {
            revalidate: 60 * 60 * 24 * 7, // 1 неделя
          },
        },
      },
      variables: { lang: locale },
    }),
  ]);
};
