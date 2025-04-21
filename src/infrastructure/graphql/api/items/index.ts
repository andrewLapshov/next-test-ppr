import { Locale } from '../../../locale';
import { getClient } from '../../config';
import { Tags } from '../../tags';
import { allItemsQuery } from './all-items-query';

const fetchAllItems = async (locale: Locale) => {
  return getClient().query({
    query: allItemsQuery,
    context: {
      fetchOptions: {
        cache: 'force-cache',
        next: {
          revalidate: 60 * 60 * 24, // 1 день
          tags: [Tags.fetchAllItemsData],
        },
      },
    },
    variables: { lang: locale },
  });
};

export const fetchAllItemsDataCached = fetchAllItems;
