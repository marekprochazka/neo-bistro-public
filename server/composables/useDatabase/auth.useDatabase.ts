import type { Client } from 'pg';
import { APIError } from '~/error/api.error';
import type UserProfile from '~/schemas/public/UserProfile';
import { v4 as uuidv4 } from 'uuid';
import { SESSION_VALIDITY } from '~/config/constants';
import { userProfile as zUserProfile } from '~/schemas/public/UserProfile';
import { _q } from '~/server/utils/q';
import { UserProfileLite, zUserProfileLite } from '~/types/api.types';

export function useAuth(client: Client) {
  async function isTokenValid(token: string): Promise<boolean> {
    const { rows } = await client.query(
      'SELECT * FROM public.session WHERE token = $1 AND valid_until > NOW()',
      [token],
    );
    return rows.length > 0;
  }

  /**
   * @returns string -> Session token
   */
  async function login(data: {
    email: string;
    password: string;
  }): Promise<string> {
    const exists =
      (
        await client.query(
          'SELECT * FROM public.user_profile WHERE email = $1',
          [data.email],
        )
      )?.rowCount ?? 0 > 0;
    if (!exists) {
      throw new APIError('Invalid email', ['email']);
    }
    const { rows } = await client.query<UserProfile>(
      'SELECT * FROM public.user_profile WHERE email = $1 AND password = crypt($2, password)',
      [data.email, data.password],
    );
    if (rows.length === 0) {
      throw new APIError('Invalid password', ['password']);
    }

    const token = uuidv4();
    await client.query(
      'INSERT INTO public.session (token, user_id, valid_until) VALUES ($1, $2, $3)',
      [token, rows[0].id, new Date(Date.now() + SESSION_VALIDITY)],
    );
    return token;
  }

  async function getUser(id: UserProfile['id']): Promise<UserProfile> {
    const { rows } = await client.query(
      'SELECT * FROM public.user_profile WHERE id = $1',
      [id],
    );
    return zUserProfile.parse(rows[0]);
  }

  async function createUser(data: Partial<UserProfile>): Promise<UserProfile> {
    if (!data.email) {
      throw new Error('Email is required');
    }
    if (!data.password) {
      throw new Error('Password is required');
    }
    const { rows } = await client.query(
      `INSERT INTO public.user_profile (email, password, is_anonymous, is_admin, is_active, is_subscribed, first_name, last_name) VALUES ($1, crypt($2, gen_salt('bf')), $3, $4, $5, $6, $7, $8) RETURNING *`,
      [
        data.email,
        data.password,
        data.is_anonymous || false,
        data.is_admin || false,
        data.is_active || true,
        data.is_subscribed || false,
        data.first_name || '',
        data.last_name || '',
      ],
    );
    return zUserProfile.parse(rows[0]);
  }

  async function getLoggedUser(token: string): Promise<UserProfileLite | null> {
    const { rows } = await client.query(await _q('active-user'), [token]);
    if (rows.length === 0) {
      return null;
    }
    return zUserProfileLite.parse(rows[0]);
  }

  return { isTokenValid, login, getUser, createUser, getLoggedUser };
}
