import {isContext} from "vm";
// import { url } from "inspector";
import axios from "axios"
import {Indicator,Toast} from 'mint-ui'
export default {
    add_ac({commit}){
        commit("add")
    },
    AdList({commit},{url}){
        // commit('AdList')
        axios.get(url,{
        }).then(res=>{
            // console.log(res.data);
            // console.log("==============")
            // this.$store.state.adList=res.body;
        //     console.log(this.$store.state.adList)
        commit('AdList',res.data)
        })
    },
    present({commit},{url}){
        
        axios.get(url,{

        }).then(res=>{
            commit('present',res.data)
        })
    },
    intend({commit},{url}){
        Indicator.open({
            text: '加载中...',
            spinnerType: 'triple-bounce'  
        });
        axios.get(url,{

        }).then(res=>{
            commit('intend',res.data)
        })
    },
   
    intendBtn({commit}){
        commit("intendBtn")
    },
    presentBtn({commit}){
        commit('presentBtn')
    },
    disconnects({commit},{url}){
        axios.get(url,{

        }).then(res=>{
            commit('disconnects',res.data)
        })
    },
    goods({commit},{url}){
        axios.get(url,{

        }).then(res=>{
            commit("goods",res.data)
        })
    },
    signBtn({commit},data){
        axios.get(data.url,{
            params:{
                username:data.username,
                password:data.password,
                code:data.code
            }
        }).then(res=>{
            commit('signBtn',res.data)
        })
    },
    loginBtn({commit},data){
        axios.get(data.url,{
            params:{
                username:data.username,
                password:data.password
            }
        }).then(res=>{
            commit('signBtn',res.data)
        })
    },
    phoneVar({commit},data){
        axios.get(data.url,{
            params:{
                username:data.username,
                code:data.code,
            }
        }).then(res=>{
            console.log("111111") 
            console.log("111111") 
            console.log("111111")
            commit("phoneVar",res.data)
        })
    },
    VPhone({commit},data){
        axios.get(data.url,{
            params:{
                phone:data.phone,
                username:data.username
            }
        }).then(res=>{
            commit("VPhone",res.data)
        })
    }





    // signBtn({commit},{rul},username,password){
    //     axios.get(url,{
    //         params:{
    //             username,
    //             password
    //         }
    //     }).then(res=>{
    //         commit('signBtn',res.data)
    //     })
    // }
}
// changeCity({commit},city){
//     commit("changeCity",city);
// },