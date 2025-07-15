import { createRouter, createWebHistory } from 'vue-router'

// const routes = [
//   {
//     path: '/',
//     name: 'index',
//     component: () => import('../views/index.vue'),
//   },
//   {
//     path: '/home-index',
//     name: 'home',
//     component: () => import('../views/home/index.vue'),
//   },
//   {
//     path: '/about-index',
//     name: 'about',
//     component: () => import('../views/about/index.vue'),
//   },
// ]

const pages = import.meta.glob('../views/**/page.js',{
  eager: true,  //直接把模块结果出来
  import: 'default'  //默认导出,直接拿到结果里面的default这个对象
})

const components = import.meta.glob('../views/**/index.vue')

const routes = Object.entries(pages).map(([path, meta]) => {
  const comPath = path.replace('page.js','index.vue')
  path = path.replace('../views','').replace('/page.js','') || '/'
  const name = path.split('/').filter(Boolean).join('-') || 'index'
  return {
    path,
    name,
    component: components[comPath],
    meta
  }
})
console.log(routes)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

