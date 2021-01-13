<template>
  <div>
    <van-tabs v-model="active" @click="onClick">
      <van-tab title="精选"></van-tab>
      <van-tab title="最新"></van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
Vue.use(Tab);
Vue.use(Tabs);

export default {
    data(){ 
        return{
            active:0,
            urls:["/home/choice","/home/new"]
        }
    },
    created(){
       this.active = this.urls.indexOf(this.$route.path )
    },
  methods: {
    onClick(index) {
      this.$router.push(this.urls[index])
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
