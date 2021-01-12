<template>
  <div id="app">
      <Footer></Footer>
    <router-view/>
  </div>
</template>

<script>

import Footer from '@/components/Navigation/Footer.vue'

export default {
    components:{
        Footer,
    },
};
</script>

<style lang="scss">

</style>
