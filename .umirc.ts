import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: { // node_modules下的文件不走babel编译，减少40%到60%的编译时间
    type: 'none',
    exclude: []
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  // routes: routes,
  title: "mys app....",
  dva: {},
  antd: {},
  proxy: {
    '/api/': {
      'target': 'https://pvp.qq.com/',
      'changeOrigin': true,
      'pathRewrite': {
        '^/api/': ''
      }
    }
  }
});
