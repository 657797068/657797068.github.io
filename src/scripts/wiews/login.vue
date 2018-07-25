<template>
<div>
 <mt-header class="header" title="登录">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            </mt-header>
            <div class="sginIcon"><img src="../../assets/image/images.jpg" alt=""></div>
<!-- 密码登陆-->
        <div class="option">
          <a @click="option1" class="option1"> 密码登录</a>
           <a @click="option2" class="option2"> 动态登录</a>
        </div>
        <div>
     <div class="tab static" v-show="show">
            <div class="login">
                <input class="form-control" name="username" type="text" autocomplete="off" placeholder="请输入手机号码" v-model="username" >
            </div>
            <div class="login">
                <label>
                    <input class="form-control" name="password" :type="type" placeholder="请输入密码" v-model="password" >
                    <span class="icon1" ><img @click="sbumintBtn()" src="../../assets/image/icon1.jpg"></span>
                </label>
            </div>
            <div class="login" >
                <input class="yinput" autocomplete="off" name="yzm" type="text" placeholder="验证码" v-model="yanzhengma" v-on:input="yanzheng">
                <div class="verify">
                    <p class="btn" type="button" @click="yzm()">获取验证码</p>
                    <canvas width="120" height="40" id="c1">请升级浏览器</canvas>
                </div>
                <span class="hint">{{hinitMsg3}}</span>
            </div>
            <router-link to="" slot="left" class="loginBtn">
                <mt-button size="normal" type="primary" placeholder="登录" @click="loginBtn" :disabled="btnSing" >登录</mt-button>
            </router-link>
    </div>
</div>
<!-- 验证码登陆-->
       <div>
     <div class="tab state" v-show="!show">
            <div class="login">
                <input class="form-control" name="username" type="text" autocomplete="off" placeholder="请输入手机号码" v-model="username" >
            </div>
           
            <div class="login" >
                <input class="yinput" autocomplete="off" name="yzm" type="text" placeholder="验证码" v-model="yanzhengma1" @change="change">
                <div class="verify">
                    <input class="btn verifyBtn" type="button" value="获取短信验证码" @click="LPhone">
                </div>
                <span class="hint">{{hinitMsg3}}</span>
            </div>
            <div to="" slot="left" class="loginBtn">
                <mt-button size="normal" type="primary" placeholder="登录"   @click="loginBtn">登录</mt-button>
            </div>
    </div>
       </div>


    <div class="login1" @click="goLogin">我要注册</div>
</div>
</template>
<script>
import {MessageBox} from "mint-ui"
import { mapState, mapActions } from "vuex";
import Head from "../component/header.vue";
import $ from "jquery";
import { setInterval, clearInterval } from 'timers';

// import State from "../component/state.vue";
// import Static from "../component/static.vue"

// import Yzm from "../component/yanzhenma.vue"
export default {
  components: {
    Head
    // State,
    // Static
  },
  data() {
    return {
      username: "",
      password: "",
      hinitMsg3: "",
      btnSing:true,
      yanzhengma: "",
      identifyCode: "",
      type: "password",
      signobj: "",
      yanzhengma1:"",
      show: true
    };
  },
  computed: {
    ...mapState(["inCode", "data", "signObj"])
  },
  methods: {
    ...mapActions(["loginBtn",'LPhone','loginBtn1','loginBtn2']),
    goLogin: function() {
      this.$router.push({ name: "register" });
    },

    //登陆
    loginBtn(){
      localStorage.username=this.username;
      // localStorage.password=this.password;
      this.$http.get("http://47.96.121.92:1010/login",{
        params:{
          username:this.username,
          password:this.password||this.yanzhengma1
        }
      }).then(res=>{
        console.log(res.data)
        if(res.data.code=="1"){
          this.$router.push({name:"home"})
        }
      })
    },


    //切换状态
    option1(){
      // console.log(this)
      $(".option1").css({borderBottom:"#ff34b3 2px solid"})
      $(".option2").css({borderBottom:"#fff 2px solid"})
      this.show=true
    },
     option2(){
      $(".option2").css({borderBottom:"#ff34b3 2px solid"})
      $(".option1").css({borderBottom:"#fff 2px solid"})
      this.show=false
    },
    LPhone(){
       var num = 40;
      this.$http.get("http://47.96.121.92:1010/LPhone",{
        params:{
          username:this.username,
          password:this.password?this.password:this.yanzhengma1,
        }
      }).then(res=>{
        var data=res.data
        console.log(data)
        if(data.code=="1"){
          MessageBox('提示', data.msg);
          var time1=setInterval(()=>{
         num=--num;
         $(".verifyBtn").attr({disabled:true}).val(`${num}秒后重试`);
         if(num<=0){
         $(".verifyBtn").attr({disabled:false}).val(`获取短信验证码`);
          clearInterval(time1)
         }
       },1000)
        
        }else{
        MessageBox('提示', data.msg)}
      })
    },

    //显示密码
    sbumintBtn: function() {
      console.log(this.type);
      if (this.type == "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
      // if(this.type=="text"){
      //     this.type="password"
      // }
      // this.type=!this.type
    },
//手机验证码校验
    change:function(){
		this.$http.get("http://47.96.121.92:1010/verifyCode",{
			params:{
				username:this.username,
				code:this.yanzhengma1
			}
		}).then(res=>{
			console.log(res.data)
			if(res.data.code=="1"){
				this.hinitMsg3=res.data.msg;
				$(".hint").css({ color: "green" });
			}else{
				this.hinitMsg3=res.data.msg;
				$(".hint").css({ color: "red" });
			}
		})
    },

//验证码校验
    yanzheng: function() {
      var identifyCode = this.identifyCode.toLowerCase();
      var yanzhengma = this.yanzhengma.toLowerCase();

      console.log();
      if (identifyCode == yanzhengma && yanzhengma != "") {
        this.hinitMsg3 = "√";
        $(".hint").css({ color: "green" });
        this.btnSing=false;
      } else {
        this.hinitMsg3 = "验证码不正确";
        $(".hint").css({ color: "red" });
        this.btnSing=true;

      }
    
    },

    yzm() {
      this.identifyCode = "";
      //1.新建一个函数产生随机数
      function rn(min, max) {
        return parseInt(Math.random() * (max - min) + min);
      }
      //2.新建一个函数产生随机颜色
      function rc(min, max) {
        var r = rn(min, max);
        var g = rn(min, max);
        var b = rn(min, max);
        return `rgb(${r},${g},${b})`;
      }
      //3.填充背景颜色,颜色要浅一点
      var w = 120;
      var h = 40;
      var ctx = c1.getContext("2d");
      ctx.fillStyle = rc(180, 230);
      ctx.fillRect(0, 0, w, h);
      //4.随机产生字符串
      var pool = "ABCDEFGHIJKLIMNOPQRSTUVWSYZ1234567890";
      for (var i = 0; i < 4; i++) {
        var c = pool[rn(0, pool.length)]; //随机的字
        var fs = rn(18, 40); //字体的大小
        var deg = rn(-30, 30); //字体的旋转角度
        ctx.font = fs + "px Simhei";
        ctx.textBaseline = "top";
        ctx.fillStyle = rc(80, 150);
        ctx.save();
        ctx.translate(30 * i + 15, 15);
        ctx.rotate(deg * Math.PI / 180);
        ctx.fillText(c, -15 + 5, -15);
        ctx.restore();
        this.identifyCode += c;
      }
      //5.随机产生5条干扰线,干扰线的颜色要浅一点
      for (var i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.moveTo(rn(0, w), rn(0, h));
        ctx.lineTo(rn(0, w), rn(0, h));
        ctx.strokeStyle = rc(180, 230);
        ctx.closePath();
        ctx.stroke();
      }
      //6.随机产生40个干扰的小点
      for (var i = 0; i < 40; i++) {
        ctx.beginPath();
        ctx.arc(rn(0, w), rn(0, h), 1, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = rc(150, 200);
        ctx.fill();
      }
      this.yanzhengma = this.identifyCode;
    }
  },
  created() {
  },
  watch: {
    //    signObj:function(){
    //        console.log(this.signObj)
    //         var code  = this.signObj.code;
    //         var msg  = this.signObj.code;
    //         if(code=="1"){
    //             MessageBox('提示', msg);
    //         }else if(code=="2"){
    //             MessageBox('提示', msg);
    //         }else{
    //         }
    //    }
  },

  computed: {}
};
</script>
<style lang="scss" >
.option {
  width: 90%;
  height: 80px;
  margin-bottom: 30px;
  margin: auto;
  a{
      width: 50%;
      height: 100%;
      float: left;
      font-size: 30px;
      line-height: 80px;
      text-align: center;
      color: #000;
      border-bottom:2px solid #fff;

  }

}

#app {
  background-color: #fff;
}
input {
  font-size: 30px;
}
.login1 {
  z-index: 1000;
}
.mint-header {
  background: #fff !important;
  position: static !important;
  width: 100%;
  height: 100%;
}
.verify {
  position: absolute;
  top: -20px;
  right: 0;

  .btn {
    font-size: 14px; /*no*/
    width: 120px; /*no*/
    height: 40px; /*no*/
    background-color: #fff;
    border: 1px solid #ff34b3;
    text-align: center;
    line-height: 40px; /*no*/
    border-radius: 5px;
  }
}
.sginIcon {
  width: 100%;
  padding: 10px 0 60px;
  text-align: center;
  img {
    display: inline-block;
    width: 120px;
  }
}
.tab {
  .login {
    position: relative;
    width: 90%;
    height: 70px;
    margin-bottom: 30px;
    border-bottom: 1px solid #f0f0f0;
    margin-left: 5%;
    .hint {
      display: block;
      margin-top: 40px;
    }
    .form-control {
      width: 70%;
      height: 90%;
      border: 0;
      padding: 3px 20px;
      box-sizing: border-box;
    }
    .passwordinit {
      margin: 10px;
    }
    .yinput {
      border: 0;
      padding: 3px 20px;
      box-sizing: border-box;
    }
    label {
      width: 100%;
      position: relative;
      display: inline-block;
      span {
        display: inline-block;
        width: 30%;
        font-size: 16px;
      }
      .icon1 {
        position: absolute;
        text-align: right;
        right: 50px;
        top: 10px;
        img{
          display: inline-block;
        }
      }
    }
  }
  .loginBtn {
    display: inline-block;
    margin-top: 80px;
    width: 100%;
    text-align: center;
    .mint-button {
      display: inline-block;
      width: 90%;
      background-color: #ff34b3;
    }
  }
}
.login1 {
  margin-top: 60px;
  color: #ff34b3;
  float: right;
  font-size: 30px;
  margin-right: 6%;
}
.check {
  width: 100px;
}
.agreement {
  width: 100%;
  height: 60px;
  text-align: left;
  padding-left: 5%;
  padding-top: 30px;
  line-height: 60px;
  position: fixed;
  font-size: 30px;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  span {
    display: inline-block;
    height: 20px;
    color: #ff34b3;
  }
}
.header {
  .mint-button-icon {
    width: 40px;
    .mintui-back {
      display: inline-block;
      width: 40px;
      height: 40px;
      background: url("../../assets/image/icon4.jpg") center center no-repeat;
      background-size: 100%;
      z-index: 2000;
    }
  }
}
.mintui-back:before {
  content: "";
}
</style>
