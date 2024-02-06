import { request } from '@umijs/max';

export async function querySummoners(
  params?: {},
  options?: { [key: string]: any },
) {
  return request<{ code: number; data: API.Summoner[] }>(
    'https://wzry-database-server.onrender.com/summoners',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
