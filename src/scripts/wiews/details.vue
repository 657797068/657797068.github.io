<template>

    <div class="deta">
        <div class="header">          
            <div class="back" @click="goback"><i class="iconfont icon">&#xe64a;</i></div>
            <div class="header_left">
                <img :src="mv.thumbnail">
            </div>
            <div class="header_right">
                <p>评分<span>{{mv.averageDegree}}</span></p>
                <h2>{{mv.cName}}</h2>
                
                <h3><span>{{mv.filmType}}</span><span>{{mv.duration}}</span>分钟</h3>
                <div>{{mv.firstShowDate}}上映</div>
            </div>
            <div class="conent"></div>
        </div>
        <div class="comment">
            <dl>
                <dt>
                    <p>用户评论<span>({{comment.length}})</span>条</p>
                    <h5>发表评论</h5>
                    <div></div>
                </dt>
                <dd  v-for="(item,index) in comment" :key="index">
                    <ul>
                        <li>{{item.username}}</li>
                        <li>{{item.datetime}}评论</li>
                        <li>{{item.content}}</li>
                        <li><p><i class="icon"></i></p><p>回复</p></li>
                    </ul>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
import {Indicator,Toast,InfiniteScroll,Lazyload } from "mint-ui";
export default {
    data(){
        return{
            mv:{},
            comment:[],
            filmNo:""
        }
    },
    methods:{
        goback(){
            history.go(-1)
        }

    },
     created(){
        Indicator.open({
            text: '加载中...',
            spinnerType: 'triple-bounce'
        });
        // var search = window.location.search.split("=")[1];
        // this.filmNo= search;
        this.filmNo=this.$route.params.filmNo;
        this.$http.get("http://47.96.121.92:1010/details",{
            params:{
                filmNo:this.filmNo
            }
        }).then(res=>{
                console.log(res.data)
                this.mv = res.data[0];
                console.log(this.mv)
        })
        this.$http.get("http://47.96.121.92:1010/comment",{
            params:{
                filmNo:this.filmNo
            }
        }).then(res=>{
                 this.$nextTick(()=>{
                    Indicator.close();
                    Toast({
                        message: '请求成功!',
                        iconClass: 'iconfont icon-camerafill',
                        duration:1000,
                    });
                })
                console.log(res.data)
                res.data.forEach(element => {
                });
                // this.comment = res.data[0];
                this.comment=res.data.slice(0)
        })
    }
}
</script>


<style lang="scss">
.comment{
    dl{
        width: 100%;
        dt{
            padding:10px 10px;
            border-bottom: 1px solid #ddd;
            color: #000;
            p{
                width: 50%;
                float: left;
                font-size: 30px;
            }
            h5{
                width: 50%;
                float: left;
                color: #FF34B3;
                text-align: center;
            }
            div{
                clear: both;
            }
        }
        dd{
             padding:10px 10px;
            border-bottom: 1px solid #ddd;
            ul{
                li{
                 padding:0px 10px;
            }
            }
        }
    }
}
.header{
    .back{
        width: 100%;
        height: 60px;
        .icon{
            line-height: 60px;
            margin-right: 20px;
            display:block;
            transform:rotate(180deg);
            text-align: right;
            color:#ff0;
        }
    }
    width: 100%;
    // height: 200px;
    background:rgba(221, 221, 221, 0.8);
    .header_left{
        float: left;
        width: 40%;
        img{
            padding: 40px;
            width: 80%;
        }
    }
    .header_right{
        float: left;
      width: 50%;
      color: #fff;
      font-size: 30px;
      p{
          padding-top: 10px;
          color: #FFC125;
          margin-top: 50px;
      }
      h2{
          padding-top: 10px;
          font-size: 40px;
      }
      h3{
          padding-top: 100px;
      }
      div{
          padding-top: 10px;
      }
    }
}
.conent{
    clear: both;
}
</style>
