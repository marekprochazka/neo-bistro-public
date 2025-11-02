import type Image from '~/schemas/public/Image';

export function useImg() {
  async function toBase64(file: File[]): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file[0]);
      // @ts-ignore
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  async function getDatabaseImg(id: string) {
    const { data, error } = await unpackResponse<Image>(
      useFetch(`/api/img/${id}`),
    );
    if (error) {
      useNotify('error', error.message);
    }
    return data;
  }

  function getAssetGlob(): Record<string, string> {
    const glob = import.meta.glob('~/assets/img/*.*', { eager: true });
    return Object.fromEntries(
      Object.entries(glob).map(([key, value]) => {
        // @ts-ignore
        return [key.split('/').pop(), value.default];
      }),
    );
  }

  return { toBase64, getDatabaseImg, getAssetGlob };
}
