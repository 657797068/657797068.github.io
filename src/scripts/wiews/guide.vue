<template>
    <div class="startPage">
        <mt-swipe :auto="4000" >
            <mt-swipe-item v-for="(img,index) in imgs" :key="index">
                <img class="img" :src="img" alt="" @click="goto(index)">
            </mt-swipe-item>
            
        </mt-swipe>
    </div>
</template>

<script>
    import p1 from "../../assets/image/slide1.jpg";
    import p2 from "../../assets/image/slide2.jpg";
    import p3 from "../../assets/image/slide3.jpg";
    import p4 from "../../assets/image/slide4.jpg";

export default {
    methods:{
        goto(index){
            if(index>=3){
                this.$router.push("/app/home")
            }
        }
    },
  data(){
      return {
          imgs:[p1,p2,p3,p4]
      }
  }

}
</script>

<style scoped>
    mt-swipe, mt-swipe-item , .img{
    width: 100%;
    height: 100%;
}
</style>

