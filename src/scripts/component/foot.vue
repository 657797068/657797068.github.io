<template>
    <footer>
        <div v-for="(foot,index) in footList" :key="index">
            <router-link :to="{name:foot.name}">
                <i class="iconfont" v-html="foot.icon"></i>
                <span>{{foot.txt}}</span>
            </router-link>
        </div>
    </footer>
</template>


<script>
export default {
    data(){
        return {
            footList:[
               {name:"home",txt:"电影",icon:"&#xe667;",path:"../wiews/home.vue"},
                {name:"goods",txt:"商城",icon:"&#xe663;",path:"../wiews/goods.vue"},
                {name:"discounts",txt:"活动",icon:"&#xe635;",path:"../wiews/discounts"},
                {name:"my",txt:"我的",icon:"&#xe612;",path:"../wiews/my"},
            ]
        }
    }
}
</script>