<template>
    <div id="container">
  <ul>
    <li v-for="(item,index) in disconnectsList" :key="index">
        <a href="item.advPicUrl">
          <img v-lazy.container="item.adImgUrl">
          <h2>{{item.adTitle}}</h2>
          <p><span>{{item.startTime}}</span>至<span>{{item.endTime}}</span></p>
          <!-- <span>{{item.outtime?"":"已过期"}}</span> -->
        </a>
        
    </li>
  </ul>
</div>
</template>
<script>
import Vue from "vue";
import { mapActions, mapState } from 'vuex';
import { Lazyload } from 'mint-ui';

Vue.use(Lazyload);
export default {
     methods:{
        ...mapActions([
            'disconnects'
        ])
    },
    computed:{
        ...mapState([
            'disconnectsList'
        ])
    },
     created(){
        this.disconnects({url:"http://47.96.121.92:1010/discounts"})
    }
}
</script>


<style lang="scss" scoped>
// image[lazy=loading] {
//   width: 100%;
//   height: 300px;
//   margin: auto;
// }
</style>

