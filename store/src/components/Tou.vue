<template>
  <div class="to">
    <img src="../../static/img/tou1.png" alt="">
    <img src="../../static/img/tou2.png" alt="">
    <input type="text" placeholder="输入商品关键词">
    <img src="../../static/img/tou3.png" alt="">
  </div>
</template>

<script>
    export default {
        name: "tou"
    }
</script>

<style scoped>
  .to{
    width: 100%;
    height: 1.1rem;
    background-color: #e53e42;
    position: relative;
  }
  .to>img:nth-of-type(1){
    width: 1.1rem;
    margin-top: 0.4rem;
    margin-left: 0.3rem;
  }
  .to>input{
    width: 3.2rem;
    height: 0.5rem;
    padding-left: 0.8rem;
    position: absolute;
    top: 0.3rem;
    left: 1.92rem;
    font-size: 0.27rem;
    color: #e53e42;
    border-radius: 0.1rem;
  }
  .to>img:nth-of-type(2) {
    width: 0.3rem;
    position: absolute;
    top: 0.38rem;
    left: 2.3rem;
    z-index: 1;
  }
  .to>img:nth-of-type(3){
    width: 0.4rem;
    position: absolute;
    top: 0.38rem;
    right: 0.21rem;

  }
</style>
