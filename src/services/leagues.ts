import { request } from '@umijs/max';

export async function queryLeagues(
  params?: {},
  options?: { [key: string]: any },
) {
  return request<{ code: number; data: API.League[] }>(
    'https://wzry-database-server.onrender.com/leagues',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
