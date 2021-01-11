<template>
    <div>
        <van-image class="one" fit="contain" src="https://c-ssl.duitang.com/uploads/blog/202012/01/20201201095849_9ed52.thumb.700_0.jpg"/>
        <div class="exp">
            <div class="menue">
                <van-cell is-link title="我的收藏" />
                <van-cell icon='' is-link title="我的订阅" />
                <van-cell is-link title="清楚缓存"/>
                <van-cell is-link title="给个好评"/>
                <van-cell is-link title="关于APP"/>
                <van-cell is-link title="登录APP" @click="goLogin" v-if="!userInfo.headIcon"/>
            </div>
        </div>
        
    </div>
</template>
<script>
import Vue from 'vue';
import { ActionSheet,Cell,Image as VanImage } from 'vant';

Vue.use(ActionSheet);
Vue.use(Cell);
Vue.use(VanImage);

export default {
    methods:{
        goLogin(){
            this.$router.push('/login')
        }
    },
    data(){
        return{
            userInfo:{}
        }
    },
    created(){
        let jwt = this.$store.state.global._token
        console.log(jwt)
        if(jwt){
            this.$http.get('http://127.0.0.1:80/backend/getuserinfo').then(ret=>{
                this.userInfo = ret.data
            })
        }
    }

    
  
}
</script>
<style lang="scss" scoped>
   *{
       font-size: 16px;
   }
   .exp{
       margin-top: -30px;
   }
</style>