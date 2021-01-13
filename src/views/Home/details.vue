<template>
    <div>
        <h4 class="taytitle">今日排行榜<i class="pushback" @click="pushback">←</i></h4>

<div class="bigbody">


            
            <div class="centerbox" v-for="(item,index) in list" :key="index">
                <div>
                    <div>
                        <img class="bigimg" :src="item.photo.path" alt="">
                    </div>
                    <h5>{{item.album.name}}</h5>
                    <span>★{{item.album.favorite_count}}</span>
                    <div class="fabox">
                            <img class="headimg" :src="item.sender.avatar" alt="">
                            <h6>{{item.sender.username}}</h6>
                            <p>{{item.album.name}}</p>
                    </div>
                </div>
            </div>

</div>

    </div>
</template>

<script>
import uri from '@/config/uri.js'

import Vue from 'vue';
import { List } from 'vant';

Vue.use(List);


export default {
  data() {
    return {
        list:[],
    };
    },
    created(){
            this.getDate()
    },
    methods:{
        pushback(){

        },
        onLoad(){
            
        },
        getDate(){
            this.$http.get(uri.getDetails).then(ret => {
                this.list = ret.data.object_list
                console.log(ret)
            })
        },
        pushback(){
            this.$router.push("/home/Choice")
        }
    }
}
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
.taytitle{
    text-align: center;
    position: relative;
    margin: 18px 0;
}
.bigbody{
    display: flex;
    flex-wrap:wrap;
    justify-content: space-evenly;
    padding: 0 0 50px 0;
}
.centerbox{
    width: 45%;
    height: 270px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap:wrap;
    border: 1px solid gray;
    border-radius: 15px;
    overflow: hidden;
    margin: 8px 0;
}
h5{
    font-size: 12px;
    color: rgb(51, 51, 51);
    text-indent:15px;
}
span{
    font-size: 12px;
    color: rgb(153, 153, 153);
    margin-left: 10px;
}
.fabox{
    position: relative;
    border-top:1px solid gray;
    display: flex;
    padding: 5px 8px 8px;
}
.headimg{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 8px;
}
h6{
    font-size: 15px;
    color: rgb(52, 152, 219);
}
p{
    font-size: 12px;
    position: absolute;
    bottom: 3px;
    left: 20px;
}
.pushback{
    position: absolute;
    top: 0;
    left: 50px;
}

</style>