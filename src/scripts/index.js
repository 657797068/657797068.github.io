import Vue from "vue";
// import $ from "jquery"
// Vue.use($);


import VueResource from "vue-resource";
Vue.use(VueResource);
import VueAwesomeSwiper from "vue-awesome-swiper";
Vue.use(VueAwesomeSwiper);

import router from "./router";

import MintUI from "mint-ui";
Vue.use(MintUI);

// import Register from "./wiews/register.vue"
// import ElementUI from "element-ui";
// import "../styles/common/element-ui.css"
// Vue.use(ElementUI);
// import { Button, Select } from 'element-ui';
// Vue.use(Button);
// Vue.use(Select)


import Head from "../scripts/component/header.vue";
Vue.component("Head",Head);
import Popup from "../scripts/component/popup.vue";
Vue.component("Popup",Popup);
import store from "./vuex/store";
import adList from "../scripts/component/adList.vue";
Vue.component("adList",adList)


const vm = new Vue({
    el:"#app",
    data:{

    },
    router,
    store,
    // render : h => h (Register)
});






// const app = "vue so easy ";


// const person = {
//     say(){
//         return "努力最后一个月!"
//     }
// }

// const p1 = require("../assets/image/2.jpg");
// // export default {person,app};   modulex.exports = {person,app}

// export {person};   // exports.person = person   // 解构赋值的对象 

// export {app};

// export {p1};

// import ajax from "./ajax";

// export {ajax}



