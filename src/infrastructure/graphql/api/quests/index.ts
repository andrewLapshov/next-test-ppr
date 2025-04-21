import { Locale } from '../../../locale';
import { getClient } from '../../config';
import { Tags } from '../../tags';
import { allQuestsQuery } from './all-quests';

const fetchAllQuests = async (locale: Locale) => {
  return getClient().query({
    query: allQuestsQuery,
    context: {
      fetchOptions: {
        cache: 'force-cache',
        next: {
          revalidate: 60 * 60 * 24 * 7, // 1 неделя
          tags: [Tags.fetchAllQuestsData],
        },
      },
    },
    variables: { lang: locale },
  });
};

export const fetchAllQuestsDataCached = fetchAllQuests;
