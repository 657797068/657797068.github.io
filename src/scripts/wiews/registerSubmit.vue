<template>
    <div id="submit">
        <div>
            <mt-header class="header" title="提示">
            <router-link :to="url" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            
            </mt-header>
            <div id="goback">
            <router-link :to="url" >
                <mt-button>点我返回</mt-button>
            </router-link>
            </div>
        </div>
    </div>
</template>


<script>
import { MessageBox } from 'mint-ui';
import { mapActions, mapState } from 'vuex';
export default {
    data(){
        return{
            url:"/logn"
        }
    },
    computed:{
        ...mapState([
            'obj',
        ])
    },
    methods:{
        ...mapActions([

        ])
    },
    created(){
        setTimeout(() => {
            console.log(this.obj)
            if(this.obj.code=="1"){
                 MessageBox('提示', this.obj.msg);
                 this.url="/login"
            }else if(this.obj.code=="2"){
                MessageBox('提示', this.obj.msg);
                 this.url="/register"
            }else if(this.obj.code=="3"){
                MessageBox('提示', this.obj.msg);
                this.url="/home"
            }else if(this.obj.code=="4"){
                MessageBox('提示', this.obj.msg);
                this.url="/login"
            }
        }, 500);

    }
}
</script>

<style lang="scss" scopde>
#submit{
    width: 100%;
    height: 100%;
.header{
    background-color:#ff34b3 ;
}
#goback{
    position:fixed;
    right: 0;
    left:0;
    top: 30%;
    margin:auto;
    text-align: center;
}
}

</style>
