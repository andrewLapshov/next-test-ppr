'use server';

import { revalidateTag } from 'next/cache';

import { Tags } from 'infrastructure/graphql/tags';

export default async function refreshCacheAction() {
  revalidateTag(Tags.fetchHideout);
  revalidateTag(Tags.fetchHideoutModulesPage);
}
