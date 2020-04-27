/*
 * 路由配置器
 * 采用路由懒加载
 */
// 主页
const home = () => import(/* webpackChunkName: 'home' */'../../components/home/Home')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: {
      title: '',
      keepAlive: true
    }
  }
]
export default routes
