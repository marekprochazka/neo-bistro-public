import { Client } from 'pg';
import type Image from '~/schemas/public/Image';
import { image as zImage } from '~/schemas/public/Image';
import { IImageCreatePayload } from '~/types/api.types';
import z from 'zod';

export function useImg(client: Client) {
  async function getImg(id: string) {
    const { rows } = await client.query<Image>(await _q('img-get'), [id]);
    return zImage.parse(rows[0]);
  }

  async function createImg(payload: IImageCreatePayload) {
    const { rows } = await client.query(await _q('img-create'), [
      payload.data,
      payload.name,
      payload.alt,
      payload.metadata,
    ]);
    return z.string().parse(rows[0].id);
  }

  async function listImg() {
    const { rows } = await client.query<Image>(await _q('img-list'));
    return zImage.array().parse(rows);
  }

  async function deleteImg(id: string) {
    await client.query(await _q('img-delete'), [id]);
  }

  return {
    getImg,
    createImg,
    listImg,
    deleteImg,
  };
}
