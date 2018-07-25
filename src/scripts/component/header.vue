<template>
    <mt-header :title="title">
        <mt-button icon="back" v-if="back" @click="goback()">返回</mt-button>
        <mt-button  slot="right" class="nav" @click="popupBtn" >
            <i class="iconfont">&#xe61a;</i>
            <Popup></Popup>
        </mt-button>
    </mt-header>
</template>

<script>
import store from "../vuex/store.js"
import {mapActions} from "vuex";
export default {
    methods:{
        goback(){
            this.$router.go(-1);
        },
        popupBtn(){
            console.log("111111")
            this.$store.dispatch("add_ac")
        }
        // ...mapActions([
        //     'popupBtn'
        // ])
    },
    props:['title','back','show']
}
</script>
<style>

.nav{
    overflow: visible;
}
.mint-header{
    position:fixed;
    top: 0
}
.mint-header{
    background: rgba(127, 127, 127, 0.5);
    position:fixed;
    width: 100%;
    z-index: 1000;
}
.mint-header-title{
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 25px;/*no*/
    line-height: 25px;/*no*/
    background-color: #fff;
    width: 150px ;
    color: #000;
    border: 1px solid #ffffff;
    border-radius:5px;
    /* text-align:center; */
}
</style>
