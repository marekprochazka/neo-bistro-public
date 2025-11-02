import { AUTH_COOKIE_NAME, SESSION_VALIDITY } from '~/config/constants';
import type { UserProfileLite } from '~/types/api.types';

export function useAuthSession() {
  async function login(payload: { email: string; password: string }) {
    const { data: token, error } = await unpackResponse<string>(
      useFetch('/api/auth/login', {
        method: 'POST',
        body: payload,
      }),
    );
    if (error) {
      useNotify('error', error.message);
    }
    if (token) {
      const cookie = useCookie(AUTH_COOKIE_NAME, {
        maxAge: Date.now() + SESSION_VALIDITY,
        secure: true,
      });
      cookie.value = token;
    }
  }

  function logout() {
    const cookie = useCookie(AUTH_COOKIE_NAME);
    cookie.value = null;
    const localePath = useLocalePath();
    navigateTo(localePath({ name: 'index' }));
  }

  async function getActiveUserLite(): Promise<UserProfileLite | null> {
    const token = useCookie(AUTH_COOKIE_NAME).value;
    if (!token) {
      return null;
    }
    const { data, error } = await unpackResponse<UserProfileLite>(
      useFetch(`/api/auth/user/${token}`),
    );
    if (data) {
      return data;
    }
    if (error) {
      useNotify('error', error.message);
    }
    return null;
  }

  return {
    login,
    logout,
    getActiveUserLite,
  };
}
