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
  metas: [
    {
      name: 'keywords',
      content:
        '王者荣耀英雄,王者荣耀英雄介绍,王者荣耀英雄大全,王者荣耀英雄资料',
    },
    {
      name: 'description',
      content:
        '王者荣耀英雄介绍,全部英雄大全,英雄属性，英雄图片,英雄技能定位，英雄故事，英雄图文视频攻略，助您荣登最强王者宝座!',
    },
  ],
  favicons: ['/wzry-database-client/favicon.ico'],
  exportStatic: {
    extraRoutePaths: async () => {
      const res = await fetch(
        'https://wzry-database-server.onrender.com/heros',
      );
      const data: { code: number; data: API.Hero[] } = await res.json();
      return data.data.map((item) => `/herodetail/${item.ename}`);
    },
  },
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
    {
      name: '英雄数据',
      path: '/hero-data',
      component: './hero-data',
    },
    {
      path: '*',
      layout: false,
      component: './404',
    },
  ],
  npmClient: 'pnpm',
});
