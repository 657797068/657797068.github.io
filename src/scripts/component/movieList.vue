<template>
<div>
  <mt-navbar v-model="active">
        <mt-tab-item :id="active=='active'?active:''"><span id="presentBtn" @click="presentBtn">正在热映</span></mt-tab-item>
        <mt-tab-item :id="active=='active1'?active:''"><span id="presentBtn" @click="intendBtn">即将上映</span></mt-tab-item>
    </mt-navbar>


  <mt-tab-container v-model="active"  >
  <mt-tab-container-item id="active" v-if="active=='active'">
    <mt-cell v-for="(item,index) in presentList" :key="index" >
      <div class="movieBrief" >
        <router-link :to="{name:'details',params:{filmNo:item.filmNo}}" class="presentImg"><img :src="item.thumbnail"></router-link>
          <div class="movieBrief-center">
              <h2>{{item.cName}}</h2>
              <p> 观众 <span>{{ Number(item.userFilmScore).toFixed(1) }}</span> | 专业 <span>{{Number(item.averageDegree).toFixed(1)}}</span></p>
              <div class="movieEmpyt"></div>
              <div class="time">上映时间<span>{{item.firstShowDate.substring(0,4)}}</span>年<span>{{item.firstShowDate.substring(4,6)}}</span>月<span>{{item.firstShowDate.substring(6)}}</span>月</div>
          </div>
          <div class="empyt"></div>
          <div  class="movieBrief-right">
              <span id="buyBtn">购票</span>
          </div>
      </div>
      </mt-cell>
  </mt-tab-container-item>
  <mt-tab-container-item id="active1" v-if="active=='active1'">
    <mt-cell v-for="(item,index) in intendList" :key="index">
       <div class="movieBrief">
        <a href="#" class="presentImg"><img  :src="item.thumbnail"></a>
          <div class="movieBrief-center">
              <h2>{{item.cName}}</h2>
              <p> 观众 <span>{{ Number(item.userFilmScore).toFixed(1) }}</span> | 专业 <span>{{Number(item.averageDegree).toFixed(1)}}</span></p>
              <div class="movieEmpyt"></div>
              <div class="time">上映时间<span>{{item.firstDate}}</span></div>
          </div>
          <div class="empyt"></div>
          <div  class="movieBrief-right">
              <span id="buyBtn">勿忘我</span>
          </div>
      </div>
    </mt-cell>
  </mt-tab-container-item>

</mt-tab-container>
</div>
</template>

<script>
    
import { mapActions, mapState } from 'vuex';
import loginVue from '../wiews/login.vue';

export default {
//    data:{
//        retrun:{

//        }
//    },
    methods:{
      ...mapActions([
        'present',
        'intend',
        'presentBtn',
        'intendBtn'
      ]),
    
    },
    directives:{
     
    },
    computed:{
      ...mapState([
        'presentList',
        'intendList',
        'active'
      ]),
    //   num:function(data) {
    //       data.split("")
    //     //   return 
    //   }
    },
    created(){
      
      this.present({url:"http://47.96.121.92:1010/movie"});
      this.intend({url:"http://47.96.121.92:1010/intend"});
      this.presentBtn;
      this.intendBtn;
      
     
    },
}
</script>
<style lang="scss" >
#buyBtn{
  display: block;
  border: 0;
  text-align: center;
  line-height:50px ;
  width: 110px;
  height: 50px;
  border: 1px solid #FF34B3;
  border-radius: 5px;
  margin-top:60%;
  font-size: 20px;
  color: #FF34B3;
  margin-right:20px;
}
.movieBrief{
  /* position: absolute; */
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  flex-wrap: nowrap;
 position:absolute;
  left: 0;/*no*/
  width: 100%;/*no*/
  height: 240px;
  top: 10px;/*no*/
}
.mint-cell{
height: 270px ;
}
.mint-cell:hover{
background: #dddddd
}
.presentImg{
  /* position:absolute; */
  left: 30px;/*no*/
  width: 150px;
  height: 240px;
  top: 10px;/*no*/
  float: left;

}
  .movieBrief-center{
      display: flex;
      flex-direction: column;
      h2{
          font-size: 32px;
          color: #000;
          margin-bottom:20px ;
          max-width: 220px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
      }
    p{
         font-size: 26px;
         span{
             color: #FF34B3;
         }
    }
    .movieEmpyt{
        height: 40%;
    }
      .time{
          font-size: 25px;
      }
  }
.presentImg img{
   width: 150px;
  height: 240px;
  top: 10px;/*no*/
}

.mint-navbar{
  margin-bottom: 3px;
}
.mint-tab-item{
  position: relative;
  /* border-bottom:#FF34B3 !important; */
}
#presentBtn{
position: absolute;
text-align: center;
height: 37px;/*no*/
line-height: 37px;/*no*/
left:0;
right: 0;
right: 0;
top: 0;
margin: auto;

}
.mint-cell{
  border-top: 1px solid #ddd;
}
.mint-cell-wrapper{
  background-image:none;
}
.is-selected{
    color:#FF34B3 !important;
    border-bottom: 3px solid #FF34B3 !important;/*no*/
}
.empyt{
    width: 20%;
}
</style>






