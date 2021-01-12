<template>
    <div>
        <h4 class="taytitle">今日排行榜<i class="pushback" @click="pushback">←</i></h4>
        <div class="bigbody">
            <div class="centerbox">
                <div>
                    <img src="../../assets/xiangqing.jpg" alt="">
                    <h5>『内容』</h5>
                    <span>★666</span>
                    <div class="fabox">
                            <img class="headimg" src="../../assets/tx.jpg" alt="">
                            <h6>昵称</h6>
                            <p>『内容』</p>
                    </div>
                </div>
            </div>
            <div class="centerbox">
                <div>
                    <img src="../../assets/xiangqing.jpg" alt="">
                    <h5>『内容』</h5>
                    <span>★666</span>
                    <div class="fabox">
                            <img class="headimg" src="../../assets/tx.jpg" alt="">
                            <h6>昵称</h6>
                            <p>『内容』</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>



export default {
    methods:{
        pushback(){
            this.$router.push("selected")
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
}
.centerbox{
    display: flex;
    justify-content: space-evenly;
    flex-wrap:wrap;
    border: 1px solid gray;
    border-radius: 15px;
    overflow: hidden;
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
    left: 50px;
}
.pushback{
    position: absolute;
    top: 0;
    left: 50px;
}

</style>