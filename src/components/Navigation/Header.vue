<template>
    <div>
        <van-tabs @click="onClick">
            <van-tab title="精选"></van-tab>
            <van-tab title="最新"></van-tab>
        </van-tabs>
    </div>
</template>

<script>

import Vue from 'vue';
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);

export default {
  data(){
    return{
      urls:["/HomePage/selected","/HomePage/newest",]
    }
  },
  methods: {
    onClick(index){
      this.$router.push(this.urls[index])
    },
  },
};
</script>