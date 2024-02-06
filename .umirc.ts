import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  base: '/wzry-database-client/',
  publicPath: '/wzry-database-client/',
  model: {},
  initialState: {},
  request: {
    dataField: 'data',
  },
  layout: {
    title: '王者荣耀资料库',
  },
  routes: [
    {
      path: '/',
      component: '@/components/layouts',
      routes: [
        {
          path: '/',
          redirect: './hero',
        },
        {
          name: '英雄',
          path: '/hero',
          component: './hero',
        },
        {
          name: '',
          path: '/herodetail/:ename',
          component: './herodetail/$ename.tsx',
        },
        {
          name: '局内道具',
          path: '/item',
          component: './item',
        },
        {
          name: '召唤师技能',
          path: '/summoner',
          component: './summoner',
        },
      ],
    },
  ],
  npmClient: 'pnpm',
});
