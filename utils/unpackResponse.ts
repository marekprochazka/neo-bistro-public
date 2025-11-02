import type { AsyncData } from '#app/composables/asyncData';
import type { IResponse } from '~/types';

type FetchPromise<T> = AsyncData<IResponse<T> | null, any>;

export default async function <T>(
  promise: FetchPromise<T>,
): Promise<IResponse<T>> {
  const { data } = await promise;
  if (!data.value) {
    return { data: null, error: null };
  }
  return data.value;
}
