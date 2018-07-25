<template style="width:300px">
    <mt-popup
    id="popupList"  v-if="popupbtn" modal=false closeOnClickModal=flase
        popup-transition="popup-fade">
        <p>电影</p>
        <p>商城</p>
        <p>活动</p>
        <p>我的</p>
    </mt-popup>
</template>
<script>
import store from "../vuex/store.js";
import {mapState} from "vuex";
export default {
   
    computed:{
        ...mapState([
            'popupbtn'
            
        ])
    }
//    data(){
//        console.log(store.state.popupbtn)
//        return{
//            popupbtn:store.state.popupbtn
//        }
//    }
}
</script>

<style>
#popupList{
    color: black;
    background-color:#fff;
    /* position: absolute; */
    top: 85px;/*no*/
    left:84%;
    right:0%;
    width: 200px;
    padding:20px 10px;
    display: block !important;
    border-radius: 5px
    
}
</style>
