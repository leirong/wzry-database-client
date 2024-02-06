import { request } from '@umijs/max';

export async function queryHeros(
  params?: {},
  options?: { [key: string]: any },
) {
  return request<{ code: number; data: API.Hero[] }>(
    'https://wzry-database-server.onrender.com/heros',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
