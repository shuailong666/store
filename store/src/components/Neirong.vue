<template>
  <div class="box">
    <div class="aa">
      <img src="../assets/zhaopian/meishilunbo01.png" alt="">
      <img src="../assets/zhaopian/meishilunbo02.png" alt="">
      <img src="../assets/zhaopian/meishilunbo03.png" alt="">
      <img src="../assets/zhaopian/meishilunbo01.png" alt="">
    </div>
    <ul class="uu">
      <li class="choose"></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <div class="top">
      <div class="t1"></div>
      <div class="t2">热销类目</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Neirong",
    }
</script>

<style scoped>
  .box{
    width: 100%;
    height: 100rem;
    position: relative;
    overflow: hidden;
  }
.aa{
  width: 32.07rem;
  height: 2.3rem;
  background-color: #007aff;
}
  .aa>img{
width: 8rem;
  }
  .uu{
    width: 2.5rem;
    height: 0.5rem;
    position: absolute;
    left: 2.7rem;
    top: 3rem;
    display: flex;
    flex-wrap: wrap;
    list-style-type:none;
  }
  .uu>li{
    background-color: rgba(0,0,0,0.5);
    width: 0.15rem;
    height: 0.15rem;
    border-radius: 50%;
    margin-left: 0.2rem;
  }
  .top{
    width: 100%;
    height: 5rem;
    background-color:aqua;
    margin-top: 1.5rem;
  }
  .t1{
    width: 5rem;
    border: 0.1rem solid gray;
  }
</style>
