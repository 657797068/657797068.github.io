
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);   // 全局显式声明 

import state from "./state";
import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations"

const store = new Vuex.Store({
    state:state,
    actions:actions,
    mutations:mutations,
    getters:getters
});

export default store;