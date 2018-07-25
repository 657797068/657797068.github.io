<template>
     <div class="tab state" >
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
                </div>
                <span class="hint">{{hinitMsg3}}</span>
            </div>
            
            <router-link to="/registerSubmit" slot="left" class="loginBtn">
                <mt-button size="normal" type="primary" placeholder="登录"  :disabled="btnSing"  @click="loginBtn({url:'http://47.96.121.92:1010/login',username:username,password:password})">登录</mt-button>
            </router-link>
            <!-- <span>{{this.obj.code}}</span> -->

    </div>
</template>
