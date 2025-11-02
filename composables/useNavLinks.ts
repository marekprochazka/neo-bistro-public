import type { IHeaderProps } from '~/components/base/header/types';
import type BlogPostCategory from '~/schemas/public/BlogPostCategory';

// Todo: setup cache for secondary links
export function useNavLinks() {
  const { t } = useI18n();

  function getPrimaryLinks(): IHeaderProps['primaryLinks'] {
    const localePath = useLocalePath();
    return [
      // {
      //   label: t('base.header.link.menu'),
      //   to: localePath({ name: 'menu' }),
      // },
      {
        label: t('base.header.link.menu'),
        to: localePath({ name: 'menu' }),
      },
      {
        label: t('base.header.link.delivery'),
        to: localePath({ name: 'delivery' }),
      },
      {
        label: t('base.header.link.voucher'),
        to: localePath({ name: 'voucher' }),
      },
      {
        label: t('base.header.link.renting'),
        to: localePath({ name: 'renting' }),
      },
      // {
      //   label: t('base.header.link.aboutus'),
      //   to: localePath({ name: 'aboutus' }),
      // },
      {
        label: t('base.header.link.contact'),
        to: localePath({ name: 'contact' }),
      },
      {
        label: t('base.header.link.reservations'),
        to: '/',
      },
    ];
  }

  async function getSecondaryLinks(): Promise<IHeaderProps['secondaryLinks']> {
    const { data, error } = await unpackResponse<BlogPostCategory[]>(
      useFetch('/api/blog/categories/root'),
    );
    const localePath = useLocalePath();
    if (error) {
      return [];
    }
    if (!data) {
      return [];
    }
    return data.map((category) => ({
      label: category.label,
      to: localePath({
        name: 'blog-category',
        params: { category: category.seo_title },
      }),
    }));
  }

  return { getPrimaryLinks, getSecondaryLinks };
}
