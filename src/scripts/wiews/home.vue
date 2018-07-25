<template id="ad">
    <div>
        <Head title="电影"></Head>
        <AdList></AdList>
        <!-- <Nav></Nav> -->
        <MovieList></MovieList>
        <Foot></Foot>
    </div>
</template>

<script>


import Head from "../component/header.vue";
import Foot from "../component/foot.vue";
import AdList from "../component/adList.vue";
// import Nav from "../component/nav.vue";
import MovieList from "../component/movieList.vue";

export default {
    components:{
        // Nav,
        Head,
        Foot,
        AdList,
        MovieList
    }
}
</script>

