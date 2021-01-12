<template>
  <div id="app">
      <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000" @change="changeItem">
        <van-tabbar-item ><van-icon class-prefix="iconfont icon-shouye" slot="icon" size="1.5rem" /><span>首页</span></van-tabbar-item>
        <van-tabbar-item ><van-icon class-prefix="iconfont icon-leimupinleifenleileibie2" slot="icon" size="1.5rem" /><span>分类</span></van-tabbar-item>
        <van-tabbar-item ><van-icon class-prefix="iconfont icon-faxian" slot="icon" size="1.5rem" /><span>发现</span></van-tabbar-item>
        <van-tabbar-item ><van-icon class-prefix="iconfont icon-wode" slot="icon" size="1.5rem" /><span>我的</span></van-tabbar-item>
      </van-tabbar>
      
  </div>
</template>

<script>
import "@/assets/font/iconfont.css"

import Vue from 'vue';
import { Tabbar, TabbarItem, Icon } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);

export default {
  data() {
    return {
      active: 0,
      urls:["/HomePage/selected","/Classification","/Find","/Personal"],
    };
  },
  mounted(){
    this.active=0
  },
  created(){
    this.active = this.urls.indexOf(this.$route.path);
  },
   methods: {
    changeItem(index) {
      this.$router.push(this.urls[index]);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
