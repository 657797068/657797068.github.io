<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item   v-for="(item,index) in adList" :key="index">
            <a><img :src="item.adImgUrl"></a>
        </mt-swipe-item>
       
    </mt-swipe>
</template>
<script>
import Vue from "vue";
import store from "../vuex/store.js";
import { mapState, mapActions } from 'vuex';
export default {
    methods:{
        ...mapActions([
            'AdList'
        ])
    },
    computed:{
        ...mapState([
            'adList'
        ])
    },
    created(){
        this.AdList({url:"http://47.96.121.92:1010/adList"})
    }
}
</script>

<style scoped>
.mint-swipe{
    height: 560px;
}
img{
     height: 560px;
     width: 100%;
    background-size: 100% !important;
}
    mint-swipe, mt-swipe-item , {
    width: 100%;
    /* height: 100%; */
    
}
</style>
