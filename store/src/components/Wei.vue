<template>
  <div class="wei">
    <ul>
      <li  v-for="(a,b) in arr"><router-link :to="a.l3"><img @click="change(b,$event)" :src="a.bol?a.l1:a.l2" alt="" :class="a.l4"><p>{{a.l5}}</p></router-link></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Wei",
      data(){
        return {
          arr:[
            {l1:'../../static/img/wei1.png',l2:'../../static/img/wei11.png',bol:false,l3:'/',l4:'t',l5:'首页'},
            {l1:'../../static/img/wei2.png',l2:'../../static/img/wei22.png',bol:true,l3:'/',l4:'t',l5:'分类'},
            {l1:'../../static/img/wei3.png',l2:'../../static/img/wei3.png',bol:true,l3:'/',l4:'tt',l5:''},
            {l1:'../../static/img/wei4.png',l2:'../../static/img/wei33.png',bol:true,l3:'/',l4:'t',l5:'购物车'},
            {l1:'../../static/img/wei5.png',l2:'../../static/img/wei44.png',bol:true,l3:'/',l4:'t',l5:'个人中心'}
          ]
        }
      },
      methods:{
        change(i,dom){
          for (var k = 0 ; k < this.arr.length ; k++ ){
            this.arr[k].bol = true ;
          }
          this.arr[i].bol = !this.arr[i].bol ;
        }
      }
    }
</script>

<style scoped>
  .wei{
    width: 100%;
    height: 1.2rem;
    background-color: #ffffff;

    position: fixed;
    bottom: 0;
    left: 0;
    opacity: 0.9;
  }
  .t{
    width: 0.55rem;
  }
  .tt{
    width: 1.2rem;
  }
  .wei ul li:nth-child(5) img {
    height: 0.5rem;
  }
  .wei ul li:nth-child(4) img {
    width: 0.6rem;
    height: 0.5rem;
  }
  .wei>ul{
    margin-top: 0.15rem;
    display: flex;
    justify-content: space-around;
  }
  .wei>ul>li{
    text-align: center;
    font-size: 0.2rem;
  }
  .wei>ul>li p{
    color: #e83d41;
  }
</style>
