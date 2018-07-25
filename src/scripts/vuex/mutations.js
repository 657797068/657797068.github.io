import { MessageBox } from 'mint-ui';
import {Indicator,Toast} from 'mint-ui'
export default {
    
    add(state){ //add mutation
        //变更state
        // console.log("33333");
      return state.popupbtn=!state.popupbtn;
    //   console.log(state.popupbtn);

    },
    AdList(state,data){
        // console.log(data)
        state.adList=data
        // console.log(state.adList)
    },
    present(state,data){
            Indicator.close();
            Toast({
                message: '请求成功!',
                iconClass: 'iconfont icon-camerafill',
                duration:1000,
           
        })
        state.presentList=data;
    },
    intend(state,data){
        // console.log(data)
        state.intendList=data;
    },
    presentBtn(state,data){
        // console.log("33333")
        return state.active="active";
    },
    intendBtn(state,data){
        // console.log("44444")
       return state.active="active1";
    },
    disconnects(state,data){
        // console.log(data)
        state.disconnectsList=data;
    },
    goods(state,data){
        // console.log(data)
        state.goodsList=data;
    },
    signBtn(state,data){
        state.obj.code = data.code;
        state.obj.msg = data.msg;
    },
    signBtn(state,data){
        // console.log(data)
        state.obj.code=data.code;
        state.obj.msg = data.msg;
    },
    
    phoneVar(state,data){
        console.log("11111111111111111")
        console.log(data);
        if(data.code=="2"){
            MessageBox('提示', '用户名已注册，请直接登陆');
        }else{
            MessageBox('提示', '发送成功稍后请留意手机短信');
        }
        console.log("2222222222222222222")
        state.Vobj.code=data.code;
        state.Vobj.msg = data.msg;
    },
    VPhone(state,data){
        console.log(data)
        if(data.code=="2"){
            MessageBox('提示', '验证码错误');
        }
        state.object.code=data.code;
        state.object.msg = data.msg
    }

    // signBtn(state,data){
    //     // state.data=data;
    //     if(data){

    //     }
    // }
}