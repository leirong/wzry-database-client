import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  dva: {},
  antd: {},
  fastRefresh: {},
  // proxy: {
  //   '/api/': {
  //     target: 'https://wzry-database-server.onrender.com',
  //     changeOrigin: true,
  //     pathRewrite: { '^/api/': '' },
  //   },
  // },
  base: '/wzry-database-client/',
  publicPath: '/wzry-database-client/',
});
