<template id="ad">
<div class="my">
    <div class="myHeader">
        <div class="myHeader_top">
            <p class="registerBtn" @click="register">注册</p>
        </div>
        <div class="myHeader_center">
            <i class="iconfont">&#xe620;</i>
            <p class="login" @click="login">立即登录</p>
        </div>
        <div class="myHeader_bottom clear">
            <div>
                <i class="iconfont">&#xe6bd;</i>
                <span>我的订单</span>
            </div>
            <p>
                <i class="iconfont">&#xe617;</i>
                <span>我的钱包</span>
            </p>
        </div>
    </div>
    <div class="content">
        <ul>
            <li>
                <span>客服中心</span>
                <i class="iconfont">&#xe64a;</i>
            </li>
             <li>
                <span>设置</span>
                <i class="iconfont">&#xe64a;</i>
            </li>
        </ul>
        <ul>
            <li>
                <span>关于我们</span>
                <i class="iconfont">&#xe64a;</i>
            </li>
        </ul>
    </div>
    <foot></foot>
    </div>
</template>

<script>
import Head from "../component/header.vue";
import Foot from "../component/foot.vue";
import $ from "jquery";
// import Register from "../component/"
export default {
    methods:{
        login(){
            if(localStorage.username){
                
            }else{
                this.$router.push({name:"login"})
            }
        },
        register(){
            if(localStorage.username){
                localStorage.removeItem("username")
                localStorage.removeItem("password")
                this.$router.push({name:"my"})
                window.location.reload()
            }else{
                this.$router.push({name:"register"})
            }

        }
    },
    created(){
        setTimeout(() => {
            var username = localStorage.username;
        console.log(username)
        if(localStorage.username){
            // document.getElementsByClassName("login")[0].html=username
            $(".registerBtn").html("退出")
            $(".login").eq(0).html(username)
        }else{
            $(".registerBtn").html("注册")
            $(".login").html("立即登录")
        }
        }, 200);
        
    },
  components: {
    Head,
    Foot
  }
};
</script>


<style lang="scss" >
.content{
    ul{
        margin-bottom: 10px;
        li{
            box-sizing: border-box;
            padding: 5px 10px;
            width: 100%;
            height: 70px;
            line-height: 70px;
            background-color: #fff;
            margin-bottom: 2px;
            span{
                float: left;
                text-align: left
            }
            i{
                float: right;
                text-align: right;
            }
        }
    }
}
.myHeader {
    margin-bottom: 20px;
  .myHeader_top {
    width: 100%;
    height: 80px;
    line-height: 80px;
    background-color: #fff;
    color: #ff34b3;
    p {
      text-align: right;
      padding-right: 20px;
    }
  }
  .myHeader_center {
    width: 100%;
    // height: 200px;
    background: linear-gradient(90deg, #8475dc 20%, #b798e8 50%, #e0a0ec 80%);  
    text-align: center;
    // line-height: 200px;
    padding:100px 0;
    i {
      font-size: 100px;
      color: #fff;
    }
    .login{
        margin-top: 20px;
        
    }
  }
  .myHeader_bottom {
    padding: 20px 0;
    width: 100%;
    height: 100px;
    background-color: #fff;
    div,
    p {
      
      width: 50%;
      float: left;
      text-align: center;
      height: 50px;
      
      i {
          color: #ff34b3;
        display: block;
        font-size: 40px;
        margin-bottom: 5px;
        
      }
      span {
        display: block;
        font-size: 30px;
        
      }
    }
  }
}

.my {
  background: #dddddd;

}
#header {
  background: #fff;
  /* position:fixed; */
  width: 100%;
  z-index: 1000;
}
</style>
