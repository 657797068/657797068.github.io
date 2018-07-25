<template>
    <div>
        <h2>计时器 显示 </h2>
        <h2>number==={{count}}==={{count2}}</h2>

        </div>
    
</template>

<script>
import store from "../vuex/store.js";
import { mapState } from 'vuex';
export default {
    data(){
        return{
         count:store.state.count
 
        }
    },
    computend:mapState({
        count2:state=>state.count+1000
    })
}
</script>
