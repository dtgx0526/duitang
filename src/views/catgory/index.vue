<template>
  <div>
    <list></list>
    <div class="right">
      <p><img src="./img/1.jpeg"></p>
      <p><img src="./img/1.jpeg"></p>
      <p><img src="./img/1.jpeg"></p>
      <p><img src="./img/1.jpeg"></p>
      <p><img src="./img/1.jpeg"></p>
      <p><img src="./img/1.jpeg"></p>
      <p><img src="./img/1.jpeg"></p>
      <p><img src="./img/1.jpeg"></p>
      <p><img src="./img/1.jpeg"></p>
      <p><img src="./img/1.jpeg"></p>
      <p><img src="./img/1.jpeg"></p>
      <p><img src="./img/1.jpeg"></p>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import list from "@/components/list"
import "@/assets/css/index.css"
import { Toast } from 'vant';
Vue.use(Toast);

export default {
  components:{
    list
  },
  // beforeCreate() {
  //   Toast.loading({
  //     message: '加载中...',
  //     forbidClick: true,
  //   });
  // },
  // mounted(){
  //   setTimeout(()=>{
  //     Toast.success("加载完毕")
  //   },0)
  // }
}
</script>