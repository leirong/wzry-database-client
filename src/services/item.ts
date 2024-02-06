import { request } from '@umijs/max';

export async function queryItems(
  params?: {},
  options?: { [key: string]: any },
) {
  return request<{ code: number; data: API.Item[] }>(
    'https://wzry-database-server.onrender.com/items',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
