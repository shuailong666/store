<template>
  <div>
    <div class="z1">
      <li><router-link to="/" >推荐</router-link></li>
      <li><router-link to="/">贼惦记</router-link></li>
      <li><router-link to="/">美食</router-link></li>
      <li><router-link to="/">母婴</router-link></li>
    </div>
<div>
  <div class="z2">
  <div class="z3">
    <img src="../../static/img/zdj2.png" alt="">
  </div>
    <div class="z5">
    <div class="z4">
      <img src="../../static/img/zdj3.png" alt="">
    </div>
    <div class="z4">
      <img src="../../static/img/zdj4.png" alt="">
    </div>
  </div>
</div>
</div>
   <div class="z6">
     <p>即将开售</p>
   </div>
  </div>
</template>

<script>
  export default {
    name: "Zdj",

  }
</script>

<style scoped>
  .z1{
    list-style: none;
    display: flex;
    margin-top:0.15rem;
    justify-content: space-around;
    border-bottom: 1px solid rgb(200,200,200);
    padding-bottom: 0.1rem;
  }
  .z1>li>a{
    font-size: 0.3rem;
  }
  .z2{
    padding: 0.15rem;
    height: 3rem;
    background: rgb(255,255,255);
    border-bottom: 1px solid rgb(200,200,200);
  }
  .z3{
    float: left;
    width: 3.1rem;
    border-right: 1px solid rgb(200,200,200);
    height: 3rem;
  }
  .z4>img{
    margin: 0.04rem 0 0 0.1rem;
    height: 1.5rem;
  }
  .z5>div:nth-of-type(2){
    float: left;
    border-top: 1px solid rgb(200,200,200);
  }
  .z3>img{
    height: 3rem;
    margin: 0.04rem  0 0 0rem;
  }
  .z5{
    padding: 0 0.1rem;
  }
  .z6{
    padding-top: 0.2rem;
    margin-top: 0.2rem;
    text-align: center;
    background: rgb(255,255,255);
  }
  .z6>p:nth-of-type(1){
    font-size:0.36rem;
    color: #e53e42;
  }
</style>
