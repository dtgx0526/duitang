<template>
  <div>
    <van-tabbar v-show="$store.state.global.isShowFooter" v-model="active" active-color="#ee0a24" inactive-color="#000" @change="changeItem">
      <van-tabbar-item ><van-icon class-prefix="iconfont icon-shouye" slot="icon" size="1.4rem" /><span>首页</span></van-tabbar-item>
      <van-tabbar-item ><van-icon class-prefix="iconfont icon-fenlei" slot="icon" size="1.4rem" /><span>分类</span></van-tabbar-item>
      <van-tabbar-item ><van-icon class-prefix="iconfont icon-faxian" slot="icon" size="1.4rem" /><span>发现</span></van-tabbar-item>
      <van-tabbar-item ><van-icon class-prefix="iconfont icon-wode" slot="icon" size="1.4rem" /><span>我的</span></van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
// 导入字体css文件
import "@/assets/font1/iconfont.css"


import Vue from "vue";
import { Tabbar, TabbarItem,Icon } from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
export default {
    data(){
        return{
            active:0,
            //定义底部导航需要的四个地址
            urls:["/home/choice","/catgory","/find","/center"]
        }
    },
    // 纠正刷新之后索引归零的问题  获取路由信息
    created(){
      this.active = this.urls.indexOf(this.$route.path)
    },
    methods:{
        changeItem(index){
             this.$router.push(this.urls[index])
        }
    }
};
</script>