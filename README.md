# zidongluyou

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

首先在每个文件夹下的index.vue为当前页面的入口文件，之后page.js为每个路由导出的元信息
如下：
```js
export default {
  title: '家',
  menuOrder: 2,
};
```

vite  import.meta.glob 动态导入路由
webpack  require.context 动态导入路由


import.meta.env.BASE_URL读取来自vite.config.js的
// vite.config.js
export default {
  base: '/my-app/' // 此时 import.meta.env.BASE_URL 的值为 '/my-app/'
}
//这个变量会在构建时被 Vite 处理替换，开发环境和生产环境会根据实际配置自动适配

之后
```sh
npm run build
```
打包完，然后去生产环境看一下
```sh
npm run preview
```

要想把菜单项的路由自动生成，那么可以就是把router/index.js的routes的写法放到一个router.js的文件中，
```js
const routes = Object.entries(pages).map(([path, meta]) => {
  ...
```
然后导入到router/index.js和GlobalHeader.vue去使用
```js
<script setup>
import { routes as routesValue} from "../router/routes.js";
const items = ref(routesValue)
</script>
```