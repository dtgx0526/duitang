<template>
    <div class="bigbody">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item><img src="../../assets/images/lunbo.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="../../assets/images/lunbo.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="../../assets/images/lunbo.jpg" alt=""></van-swipe-item>
        </van-swipe>

        <div class="Lateral">
            <li><img src="../../assets/images/kapian.jpg" ><p>内容</p></li>
            <li><img src="../../assets/images/kapian.jpg" ><p>内容</p></li>
            <li><img src="../../assets/images/kapian.jpg" ><p>内容</p></li>
            <li><img src="../../assets/images/kapian.jpg" ><p>内容</p></li>
            <li><img src="../../assets/images/kapian.jpg" ><p>内容</p></li>
            <li><img src="../../assets/images/kapian.jpg" ><p>内容</p></li>
        </div>
        <div>
            <div class="bang">
                <h3> <img src="../../assets/images/biaoti.jpg" alt="">今日排行榜</h3>
                <span @click="aaaaa">更多></span>
            </div>
            <div class="bangcen">
                <img src="../../assets/images/renwu.jpg" alt="">
                <img src="../../assets/images/renwu.jpg" alt="">
                <img src="../../assets/images/renwu.jpg" alt="">
                <img src="../../assets/images/renwu.jpg" alt="">
                <img src="../../assets/images/renwu.jpg" alt="">
            </div>
        </div>
        <div>
            <div class="bang">
                <h3> <img src="../../assets/images/biaoti.jpg" alt="">热血精选</h3>
                <span @click="aaaaa">更多></span>
            </div>
            <div class="bangcen">
                <img src="../../assets/images/renwu.jpg" alt="">
                <img src="../../assets/images/renwu.jpg" alt="">
                <img src="../../assets/images/renwu.jpg" alt="">
                <img src="../../assets/images/renwu.jpg" alt="">
                <img src="../../assets/images/renwu.jpg" alt="">
            </div>
        </div>
        <div>
            <div class="bang">
                <h3> <img src="../../assets/images/biaoti.jpg" alt="">校园精选</h3>
                <span @click="aaaaa">更多></span>
            </div>
            <div class="bangcen">
                <img src="../../assets/images/renwu.jpg" alt="">
                <img src="../../assets/images/renwu.jpg" alt="">
                <img src="../../assets/images/renwu.jpg" alt="">
                <img src="../../assets/images/renwu.jpg" alt="">
                <img src="../../assets/images/renwu.jpg" alt="">
            </div>
        </div>
    </div>
</template>
<script>

import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
    methods:{
        aaaaa(){
            this.$router.push("/home/details")
        }
    }
}
</script>

<style lang="scss" >
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    height: 210px;
    padding-top: 10px;
    text-align: center;
  }
  img{
      width: 100%;
      height: 100%;
  }
  .navtext,h3,p{
      margin: 0;
      padding: 0;
      text-align: center;
  }
  .Lateral{
      display: flex;
      height: 105px;
      overflow: scroll;
      padding: 8px 3px;
      font-size: 16px;
  }
  .Lateral>li{
      list-style: none;
      margin-right: 8px;
      display: flex;
      flex-direction: column;
  }
  .Lateral>li>img{
      width: 80px;
      height: 80px;
  }
  .bang{
      display: flex;
      justify-content: space-between;
      align-content: center;
      font-size: 20px;
      height: 30px;
      margin-top: 8px;
  }
  .bang>h3>img{
    width: 20px;
    height: 20px;
    margin-left: 5px;
  }
  .bangcen{
    display: flex;
    overflow-x: auto;
    overflow-y: auto;
  }
  .bangcen>img{
      margin:5px 8px;
      width: 46%;
  }
  .bigbody{
      margin-bottom:52px ;
  }
</style>