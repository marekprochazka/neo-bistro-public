import { EventHandlerRequest, H3Event } from 'h3';
import type { Client } from 'pg';
export async function getConnection(
  event: H3Event<EventHandlerRequest>,
): Promise<Client> {
  const runtimeConfig = useRuntimeConfig(event);
  return await event.context.$db(runtimeConfig.databaseUrl);
}
