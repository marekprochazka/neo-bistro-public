import { AUTH_COOKIE_NAME } from '~/config/constants';
import type UserProfile from '~/schemas/public/UserProfile';

export default defineNuxtRouteMiddleware(async (to, _) => {
  if (to.path.includes('admin')) {
    const token = useCookie(AUTH_COOKIE_NAME).value || '';
    const localePath = useLocalePath();

    if (!token) {
      return navigateTo(localePath({ name: 'login' }));
    }

    const { data, error } = await unpackResponse<UserProfile>(
      useFetch(`/api/auth/user/${token}`),
    );

    if (error) {
      return navigateTo(localePath({ name: 'login' }));
    }

    if (!data) {
      return navigateTo(localePath({ name: 'login' }));
    }

    if (!data.is_admin) {
      return navigateTo(localePath({ name: '403' }));
    }
  }
});
