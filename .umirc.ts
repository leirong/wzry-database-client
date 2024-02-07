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
  headScripts: [
    // 解决首次加载时白屏的问题
    { src: '/wzry-database-client/scripts/loading.js', async: true },
  ],
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
  npmClient: 'pnpm',
});
