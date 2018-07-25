

import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import VueResource from "vue-resource";
Vue.use(VueResource)

import { TabContainer, TabContainerItem } from 'mint-ui';

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
//1.定义组件
import Guide from "./wiews/guide.vue";
import Home from "./wiews/home.vue";
import Goods from "./wiews/goods.vue";
import Discounts from "./wiews/discounts.vue";
import My from "./wiews/my.vue";
import App from "./wiews/app.vue";
import Register from "./wiews/register.vue";
import Login from "./wiews/login.vue";
import RegisterSubmit from "./wiews/registerSubmit.vue";
// import discounts from "./wiews/discounts.vue"
import Details from "./wiews/details.vue"

// import State from "../component/state.vue";
// import Static from "../component/static.vue"

//2.路由配置
const routes = [
    {path:"/app",component:App,name:"app",
    children:[
        {path:"/app/home",component:Home,name:"home"},
        {path:"/app/goods",component:Goods,name:"goods"},
        {path:"/app/discounts",component:Discounts,name:"discounts"},
        {path:"/app/my",component:My,name:"my"}
    ]
},
{path:"/app/guide",component:Guide,name:"guide"},
{path:"/register",component:Register,name:"register"},
{path:"/login",component:Login,name:"login",
    // children:[
    //     {path:"/login/state",component:State,name:"state"},
    //     {path:"/login/static",component:Static,name:"static"}
    // ]
},
{path:"/registerSubmit",component:RegisterSubmit,name:"registerSubmit"},
{path:"/details",component:Details,name:"details"},
{
    path:"*",
    redirect:"/app/home"
},


]
// router.beforeEach((to, from, next) => {
//     console.log('navigation-guards');
//     // to: Route: 即将要进入的目标 路由对象
//     // from: Route: 当前导航正要离开的路由
//     // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  
//     const nextRoute = ['home', 'good-list', 'good-detail', 'cart', 'profile'];
//     let isLogin = global.isLogin;  // 是否登录
//     // 未登录状态；当路由到nextRoute指定页时，跳转至login
//     if (nextRoute.indexOf(to.name) >= 0) {  
//       if (!isLogin) {
//         console.log('what fuck');
//         router.push({ name: 'login' })
//       }
//     }
//     // 已登录状态；当路由到login时，跳转至home 
//     if (to.name === 'login') {
//       if (isLogin) {
//         router.push({ name: 'home' });
//       }
//     }
//     next();
//   });


//3.创建路由
const router = new VueRouter({
    routes,
    // mode:"history"
})
export default router;
