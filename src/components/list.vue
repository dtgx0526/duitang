<template>
  <div>
    <h2>分类</h2>
    <!-- <div class="content"> -->
      <div class="left">
        <div class="picture" @click="changePage">
          <!-- :class="{active:index==num}" -->
          <img
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg"
            alt=""
          />
          <p>菜谱</p>
        </div>
        <div class="picture" @click="changePage2">
          <img
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg"
            alt=""
          />
          <p>家常菜</p>
        </div>
        <div class="picture" @click="changePage3">
          <img
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg"
            alt=""
          />
          <p>主食</p>
        </div>
        <div class="picture">
          <img
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg"
            alt=""
          />
          <p>西餐</p>
        </div>
        <div class="picture">
          <img
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg"
            alt=""
          />
          <p>日料</p>
        </div>
        <div class="picture">
          <img
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg"
            alt=""
          />
          <p>早餐</p>
        </div>
        <div class="picture">
          <img
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg"
            alt=""
          />
          <p>便当</p>
        </div>
        <div class="picture">
          <img
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg"
            alt=""
          />
          <p>甜点</p>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
import uri from "@/config/uri";
import "@/assets/css/list.css";
export default {
  data() {
    return {
      num: -1,
      datainfo:[]
    };
  },
  methods: {
    changePage() {
      this.$router.push("cat=1");
    },
    changePage2() {
      this.$router.push("cat=2");
    },
    changePage3() {
      this.$router.push("cat=3");
    },
  },
  created() {
    this.$http.get(uri.getIndex).then((res) => {
      this.datainfo=res
    });
  },
};
</script>
