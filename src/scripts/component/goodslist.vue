<template>
<div>
 <div class="toubu">
     <div class="city">
         <span>北京市</span>
     </div>
     <div class="cinema">
         <span>中影国际</span>
     </div>
 </div>
  <mt-tab-container  >
  <mt-tab-container-item >
    <mt-cell class="con" v-for="(item,index) in goodsList" :key="index" >
      <div class="goodsBrief" >
        <a href="" class="goodsImg">
            <img :src="item.imageUrl">
        </a>
          <div class="goodsBrief-center">
              <h2>{{item.goodsName}}</h2>
              <p>{{item.memo}}</p>
              <div class="goodsEmpyt">￥{{item.price*1}}</div>
              <div class="Vip"><span class="span1">通卡会员</span><span class="span2">￥{{item.price*1-2}}</span></div>
          </div>
         
          <div  class="goodsBrief-right">
              <p id="BuyBtn">
                <i class="iconfont" >&#xe660;</i>
              </p>
          </div>
      </div>
      </mt-cell>
  </mt-tab-container-item>
</mt-tab-container>
</div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    ...mapActions(["goods"])
  },
  directives: {
  },
  computed: {
    ...mapState(["goodsList"])
  },
  created() {
    this.goods({ url: "http://47.96.121.92:1010/goods" });
  }
};
</script>
<style lang="scss" >

.toubu {
  width: 100%;
  height: 30px; /*no*/
  margin-top: 41px; /*no*/
  .city{
      width: 50%;
      height: 50px;
      float: left;
      line-height: 50px;
      text-align: center;
  }
  .cinema{
       width: 50%;
      height: 50px;
      line-height: 50px;
      text-align: right;
      float: right;
      span{
          padding-right: 50px;
      }
  }
}
#BuyBtn {
  position: absolute;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  right: 20px;
  bottom: 10px;
  
  color: #ff34b3;
  i{
    font-size: 60px;
  }
}
.goodsBrief {
  /* position: absolute; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: nowrap;
  position: absolute;
  left: 0; /*no*/
  width: 100%; /*no*/

  top: 0; /*no*/
}
.con {
  height: 230px;
  position: relative;

}
.mint-cell:hover {
  background: #dddddd;
}
.goodsImg {
  /* position:absolute; */
  left: 30px; /*no*/
  width: 150px;
  top: 10px; /*no*/
  float: left;
}
.goodsBrief-center {
  display: flex;
  margin-left: 50px;
  flex-direction: column;
  padding-top: 20px;
  h2 {
    font-size: 32px;
    color: #000;
    margin-bottom: 10px;
    width: 330px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    width: 330px;
    // margin-bottom: 20px;
    font-size: 26px;
    height: 50px;
    span {
      color: #ff34b3;
    }
  }
  .goodsEmpyt {
    font-size: 30px;
    margin: 20px 0 5px 0;
    color: #ff34b3;
  }
  .Vip {
    font-size: 25px;
    width: 180px;
    height: 32px;
    border: 1px solid #ff34b3;
    text-align: center;
    line-height: 32px;
    border-radius: 5px;
    .span1 {
      display: inline-block;
      width: 65%;
      height: 100%;
      background: #ff34b3;
      border: 0;
      color: #fff;
    }
    .span2 {
      border: 0;
      width: 35%;
      height: 100%;
      display: inline-block;
    }
  }
}
.goodsImg img {
  width: 200px;
  padding-top: 10px; /*no*/
  height: 190px;
}

.mint-navbar {
  margin-bottom: 3px;
}
.mint-tab-item {
  position: relative;
  /* border-bottom:#FF34B3 !important; */
}
#presentBtn {
  position: absolute;
  text-align: center;
  height: 37px; /*no*/
  line-height: 37px; /*no*/
  left: 0;
  right: 0;
  right: 0;
  top: 0;
  margin: auto;
}
.mint-cell {
  border-top: 1px solid #ddd;
}
.mint-cell-wrapper {
  background-image: none;
}
.is-selected {
  color: #ff34b3 !important;
  border-bottom: 3px solid #ff34b3 !important; /*no*/
}
.empyt {
  width: 20%;
}
</style>






