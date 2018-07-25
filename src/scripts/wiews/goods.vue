<template>
    <div>
        <Head id="header" title="商品"></Head>
        <foot></foot>
        <goods></goods>
        </div>
</template>
<script>

import Head from "../component/header.vue";
import Foot from "../component/foot.vue";
import Goods from "../component/goodslist.vue"
export default {
    components:{
        Head,
        Foot,
        Goods
    }
}
</script>
<style>
#header{
    background:#fff;
    position:fixed;
    width: 100%;
    z-index: 1000;
}
.mint-tab-container{
    width: 100%;
}
.mint-header-title{
    border:1px solid #ddd ;
}
</style>
