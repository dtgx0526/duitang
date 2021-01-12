<template>
  <div class="box">
    <div class="left">
      <van-sidebar v-model="activeKey" @change="onChange">
        <van-sidebar-item
          :title="item.category_name"
          v-for="(item, index) in cat"
          :key="index"
        />
      </van-sidebar>
    </div>
    <van-loading v-show="flag" class="loading" size="24px" type="spinner"
      >加载中...</van-loading
    >
    <div>
      <van-notice-bar
        left-icon="volume-o"
        scrollable
        text="新店开业,全场三折,欲购从速"
      />
    </div>
    <div class="rightlist" id="rightlist" @touchmove="move">
      <div class="info" v-for="(item, index) in cat" :key="index">
        <p>{{ item.category_name }}</p>
        <!-- <van-card
        class="card"
        :price="el.price / 100"
        :title="el.name"
        thumb="el.image_full_url"
        v-for="(el, num) in item.goods_list"
        :key="num"
      >
        <template #footer>
          <van-button size="mini">-</van-button>
          <van-button size="mini">1</van-button>
          <van-button size="mini">+</van-button>
        </template>
      </van-card> -->
        <div class="shiwu" v-for="(el, num) in item.goods_list" :key="num">
          <img v-lazy="el.image_url" class="pic" />
          <div>
            <p>{{ el.name }}</p>
            <p>￥{{ el.price / 100 }}</p>
            <p class="btn">
              <button>-</button>
              <input type="text" value="1" />
              <button>+</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import uri from "@/config/uri";
import Vue from "vue";
import {
  Sidebar,
  NoticeBar,
  SidebarItem,
  Card,
  Button,
  Tag,
  Loading,
} from "vant";
import $ from "../../../public/jquery";
import BScroll from "better-scroll";

Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Card);
Vue.use(Tag);
Vue.use(Button);
Vue.use(Loading);
Vue.use(NoticeBar);
export default {
  data() {
    return {
      activeKey: 0,
      flag: true,
      cat: [],
    };
  },
  methods: {
    onChange(index) {
      let scrollTop = $(".info")
        .eq(index)
        .offset().top;
      scrollTop -= 40;
      $("html")
        .stop()
        .animate({ scrollTop: scrollTop });
    let indexlist = $(".van-sidebar-item");
    indexlist.eq(index).css({color:'green',backgroundColor:'white'}).siblings().css({color:'black',backgroundColor:'#f5f5f5'})
    },

    move() {
      let scrollY = window.pageYOffset;
      let heightY = window.innerHeight;
      let indexlist = $(".van-sidebar-item");
      let infolist=$(".info")
      for (let i = 0; i < infolist.length; i++) {
        let scrollTop =infolist.eq(i).offset().top;
        if (scrollY + heightY > scrollTop) {
            indexlist.eq(i).css('color','green').siblings().css('color','black')
            indexlist.eq(i).css('backgroundColor','white').siblings().css('backgroundColor','#f5f5f5')
        }
      }
    },
  },
  created() {
    this.$http.get(uri.getData).then((res) => {
      this.cat = res;
      console.log(res);
      this.flag = false;
    });
  },
};
</script>
<style scoped>
.van-sidebar-item {
  padding: 26px 20px;
}
.van-notice-bar {
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
}
.left {
  position: fixed;
  top: 40px;
  left: 0;
}
.rightlist {
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  margin-left: 140px;
  margin-top: 40px;
}
.card {
  width: 100%;
  margin-top: -27px;
}
.rightlist > div > p {
  color: black;
  position: relative;
  z-index: 1;
  font-size: 30px;
  margin-bottom: 10px;
}
.pic {
  width: 80px;
  height: 80px;
}
.shiwu {
  display: flex;
  margin-bottom: 10px;
}
.shiwu div {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  justify-content: center;
  align-items: flex-start;
}
.loading {
  text-align: center;
}
.btn {
  display: flex;
}
.btn input {
  width: 30px;
  padding-left: 9px;
  box-sizing: border-box;
}
.btn button {
  width: 20px;
}
.van-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.van-sidebar-item--select::before{
    background-color: transparent;
}
</style>
