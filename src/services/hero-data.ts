import { request } from '@umijs/max';

export async function queryHeroData(
  params: { league_id: string },
  options?: { [key: string]: any },
) {
  return request<{ code: number; data: API.HeroData[] }>(
    'https://wzry-database-server.onrender.com/hero-data',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
