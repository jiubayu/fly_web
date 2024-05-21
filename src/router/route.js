const Home = () => import(/* webpackChunkName: 'Home' */ '@/views/home.vue');
const Login = () => import(/* webpackChunkName: 'Home' */ '@/views/login.vue');
const Reg = () => import(/* webpackChunkName: 'Home' */ '@/views/reg.vue');
const Forget = () =>
  import(/* webpackChunkName: 'Home' */ '@/views/forget.vue');
console.log(Home, 'home---')
const routes = [
  {
    path: '/',
    name: 'home',
    // redirect: {name: 'index'},
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    // redirect: {name: 'index'},
    component: Login,
  },
  {
    path: '/reg',
    name: 'reg',
    // redirect: {name: 'index'},
    component: Reg,
  },
  {
    path: '/forget',
    name: 'forget',
    // redirect: {name: 'index'},
    component: Forget,
  },
];

export {routes};

