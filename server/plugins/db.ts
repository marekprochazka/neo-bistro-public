import pgs from 'pg-connection-string';
import pg from 'pg';
import z from 'zod';

export default defineNitroPlugin(async (nitroApp) => {
  const makeConnection = async (dbString: string) => {
    const config = pgs.parse(dbString);
    const client = new pg.Client({
      user: config.user,
      password: config.password,
      host: config.host ?? undefined,
      port: z.coerce.number().parse(config.port) ?? undefined,
      database: config.database ?? undefined,
      ssl: {
        rejectUnauthorized: false,
      },
    });
    // todo: handle potential errors
    await client.connect();
    return client;
  };
  nitroApp.hooks.hook('request', (event) => {
    event.context.$db = (dbStr: string) => makeConnection(dbStr);
  });
});
