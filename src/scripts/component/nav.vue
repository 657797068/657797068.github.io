<template>
    <mt-navbar v-model="active">
        <mt-tab-item  id="1"><span  @click="presentBtn">正在热映</span></mt-tab-item>
        <mt-tab-item id="2" ><span @click="intendBtn">即将上映</span></mt-tab-item>
    </mt-navbar>

<!-- tab-container -->

</template>
<script>
// import router from "router"
// import Vue from "vue";
// import { Navbar, TabItem } from 'mint-ui';
// Vue.component(Navbar.name, Navbar);
// Vue.component(TabItem.name, TabItem);

import MovieList from "../component/movieList.vue"
import { mapActions, mapState } from 'vuex';
export default {
    methods:{
        ...mapActions([
            'presentBtn',
            'intendBtn'
        ])
    },
    computed:{
        ...mapState([
            'active'
        ])
    },
    components:{
        MovieList,
    },
    created(){
        this.presentBtn,
        this.intendBtn
    }
}
</script>
<style>
/* .mint-tab-item {
    
} */
</style>
