import type { APIError } from '~/error/api.error';
import type { ComposerTranslation } from 'vue-i18n';

export interface IResponse<T> {
  data: T | null;
  error: APIError | null;
}

export type T = ComposerTranslation;
