<template>
    <div>
        <div class="logo">
            <img class="one" src="../../assets/logo.jpg" />
        </div>
        <div>
            <van-form @submit="onSubmit">
                <van-field
                    v-model="mobile"
                    name="mobile"
                    label="手机号"
                    placeholder="手机号"
                    :rules="[{ pattern, message: '请填写正确的手机号' }]"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="password"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
                <div style="margin: 16px;">
                    <van-button square block style="background-color:pink;border:pink" type="info" native-type="submit"
                        >提交</van-button
                    >
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import { Form, Field, Button, Toast } from "vant";

Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Toast);
export default {
    data() {
        return {
            mobile: "",
            password: "",
            pattern: /^1[3-9]\d{9}$/,
        };
    },
    methods: {
        onSubmit(values) {            
            this.$http.post('http://127.0.0.1/backend/login',values).then(ret=>{
                console.log(ret.error_code)
                if(ret.error_code == 0){
                    Toast.success('登录成功')
                    if(this.$route.query.callback){
                        this.router.push(this.$route.query.callback)
                    }else{
                        this.$router.push('/center')
                    }
                }else{
                    Toast.success('登录失败')
                }
            })
        },
    },
    created() {
        this.$store.commit("global/setFooter", false);
    },

    beforeDestroy() {
        this.$store.commit("global/setFooter", true);
    },
    
};
</script>

<style lang="scss" scoped>
.one{
    border-radius: 0;
}
.logo {
    text-align: center;
    
}
.logo img{
    width: 100%;
    
}
</style>
