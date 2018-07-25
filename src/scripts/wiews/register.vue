<template>
<div>
<mt-header class="header" title="登录">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            
            </mt-header>
<div class="sginIcon"><img src="../../assets/image/images.jpg" alt=""></div>
    <div class="tab" >
            <div class="sign">
                <input class="form-control" name="username" type="text" autocomplete="off" placeholder="请输入手机号码" v-model="username" v-on:input="verify()">
                <span class="usernameinit">{{hinitMsg1}}</span>
            </div>
            <div class="sign">
                <label>
                    <input class="form-control" name="password" :type="type" placeholder="请输入密码" v-model="password" v-on:input="verify1()">
                    <span class="icon1" ><img @click="sbumintBtn()" src="../../assets/image/icon1.jpg"></span>
                </label>
                <span class="passwordinit">{{hinitMsg2}}</span>
            </div>
             <div class="sign" >
                <input class="phoneinput" autocomplete="off" name="phone" type="text" placeholder="短信验证码" v-model="phone"  @change="VPhone({url:'http://47.96.121.92:1010/phone',username:username,phone:phone})">
                <div class="verify">
                    <button class="btn phoneVar" type="button" :disabled="btnPhone" @click="phoneVar({url:'http://47.96.121.92:1010/registerphone',username:username})">获取短信验证码</button>
                </div>
                <!-- <div>{{cold</div> -->
            </div>
            <div class="sign" >
                <input class="yinput" autocomplete="off" name="yzm" type="text" placeholder="验证码" v-model="yanzhengma" v-on:input="yanzheng">
                <div class="verify">
                    <p class="btn" type="button" @click="yzm()">获取验证码</p>
                    <canvas width="120" height="40" id="c1">请升级浏览器</canvas>
                </div>
                <span class="hint">{{hinitMsg3}}</span>
            </div>
            <div class="agreement" >
                我已同意阅读<span>《中影国际用户协议》</span>
            </div>
            <router-link to="/registerSubmit" slot="left" class="signBtn">
                <mt-button size="normal" type="primary" placeholder="注册" :disabled="btnSing" @click="signBtn({url:'http://47.96.121.92:1010/registerSubmit',username:username,password:password,code:phone})">注册</mt-button>
            </router-link>
    </div>
    <div class="register" @click="goLogin">我已有账号</div>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import Head from "../component/header.vue";
import $ from "jquery";

// import Yzm from "../component/yanzhenma.vue"
export default {
  data() {
    return {
      username: "",
      phone: "",
      btnPhone: true,
      password: "",
      btnSing: true,
      hinitMsg1: "请输入手机号",
      hinitMsg2: "6到12位密码",
      hinitMsg3: "",
      yanzhengma: "",
      identifyCode: "",
      type: "password",
      flage1: false,
      flage2: false,
      flage3: false
    };
  },
  computed: {
    ...mapState(["inCode", "data", "Vobj"])
  },
  methods: {
    // phoneVar(){
    //    console.log("0000");
    //    this.$http.get("http://47.96.121.92:1010/registerphone",{
    //        parmas:{
    //            username:this.username
    //        }
    //    }).then(res=>{

    //    })
    // },
    ...mapActions(["signBtn", "phoneVar", "VPhone"]),
    goLogin: function() {
      this.$router.push({ name: "login" });
    },

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
    verify1: function() {
      var exp1 = /^[a-zA-z0-9]{6,12}$/.test(this.password);
      if (exp1) {
        this.hinitMsg2 = "格式正确";
        $(".passwordinit")
          .eq(0)
          .css({ color: "green" });
        this.flage1 = true;
      } else {
        this.hinitMsg2 = "6到12位密码";
        $(".passwordinit")
          .eq(0)
          .css({ color: "red" });
        this.flage1 = false;
      }
      if (this.flage1 && this.flage2 && this.flage3 && this.phone) {
        this.btnSing = false;
      } else {
        this.btnSing = true;
      }
    },
    verify: function() {
      var exp = /^1[3|4|5|8][0-9]\d{8}$/.test(this.username);
      if (exp) {
        this.hinitMsg1 = "格式正确";
        $(".usernameinit")
          .eq(0)
          .css({ color: "green" });
        this.flage2 = true;
        this.btnPhone = false;
      } else {
        this.hinitMsg1 = "请输入手机号";
        $(".usernameinit")
          .eq(0)
          .css({ color: "red" });
        this.flage2 = false;
        this.btnPhone = true;
      }
      if (this.flage1 && this.flage2 && this.flage3 && this.phone) {
        this.btnSing = false;
      } else {
        this.btnSing = true;
      }
    },
    yanzheng: function() {
      var identifyCode = this.identifyCode.toLowerCase();
      var yanzhengma = this.yanzhengma.toLowerCase();

      console.log();
      if (identifyCode == yanzhengma && yanzhengma != "") {
        this.hinitMsg3 = "√";
        $(".hint").css({ color: "green" });
        this.flage3 = true;
      } else {
        this.hinitMsg3 = "验证码不正确";
        $(".hint").css({ color: "red" });
        this.btnSing = false;
        this.flage3 = false;
      }
      if (this.flage1 && this.flage2 && this.flage3 && this.phone) {
        this.btnSing = false;
      } else {
        this.btnSing = true;
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
    // if(this.Vobj.code=="1"){
    //     alert("注册成功")
    // }else if(this.Vobj.code=="2"){
    //     alert("注册失败")
    // }else{
    //     alert("12121")
    // }
  },

  components: {
    Head
  },
  computed: {}
};
</script>
<style lang="scss" scopde>
#app {
  background-color: #fff;
}
input {
  font-size: 30px;
}
.sign1 {
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
  .sign {
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
    .phoneinput {
      border: 0;
      padding: 3px 20px;
      box-sizing: border-box;
    }
    label {
      width: 68%;
      position: relative;
      display: inline-block;
      span {
        // display: inline-block;
        width: 30%;
        font-size: 16px;
      }
      .icon1 {
        position: absolute;
        right: -60px;
        top: 10px;
      }
    }
  }
  .signBtn {
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
.register {
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
      position: fixed;
      left: 10px;
      top: 10px;
      width: 40px;
      height: 40px;
      background: url("../../assets/image/icon4.jpg") center center no-repeat;
      background-size: 100%;
      z-index: 20000;
    }
  }
}
.mintui-back:before {
  content: "";
}
</style>
