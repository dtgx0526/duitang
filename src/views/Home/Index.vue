<template>
    <div>
        <!-- 此处可以写电影模块的顶部tab导航 -->
      
        <Header />
        <router-view> </router-view>
       
    </div>
</template>

<script>
// 此处导入顶部导航
import Header from '@/components/Navigation/Header'
export default {
    // 注册
    components:{
        Header,
       
    }
}
</script>