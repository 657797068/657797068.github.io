<template id="ad">
    <div class="conent">
        <Head id="header" title="活动"></Head>
        <LazyLoad></LazyLoad>
        <foot></foot>
    </div>
</template>
<script>


import Head from "../component/header.vue"
import Foot from "../component/foot.vue"

import LazyLoad from "../component/LazyLoad.vue"



export default {
   
    components:{
        Head,
        Foot,
        LazyLoad
    },
   
}
</script>


<style lang="scss">


  #header{
    background:#fff;
    position:fixed; 
    width: 100%;
    top: 0;
    z-index: 1000;
    border-bottom: 2px solid #ff34b3;
}
#ad{
    width: 100%;
}

.conent{

width: 100%;
ul{
    margin-top:41px ;/*no*/
    
    li{
       a{
            width: 100%;
           display: block;
           
        img{
            width: 100%;
            // height: 200px
        }
        h2{
            margin:20px;
            font-size: 35px;
            color: #000;
            padding-left: 20px
        }
        p{
            padding-bottom:50px;
             color: #ddd;
             padding-left: 40px
        }
        }
    }
}
}

</style>
