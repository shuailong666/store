<template>
  <div class="dh">
    <ul>
      <li @click="aa(0)">推荐</li>
      <li @click="aa(1)">贱惦记</li>
      <li @click="aa(2)">美食</li>
      <li @click="aa(3)">母婴</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Daoh",
        methods:{
          aa(n){
            var li = document.querySelectorAll('li');
            for (var a = 0; a < li.length; a++){
                if(a == n){
                  li[a].className='aa';
                }else{
                  li[a].className='';
                }
            }

          }
        }
    }
</script>

<style scoped>
  .dh{
    width: 100%;
    height: 0.6rem;
    background-color: #fff;
  }
  .dh>ul{
    width: 6.2rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .dh>ul>li{
    margin-top: 0.03rem;
    display: block;
    font-size: 0.3rem;
    line-height: 0.6rem;
    height: 0.57rem;
    box-sizing: border-box;
  }
  .aa{
    border-bottom: 0.04rem solid #e83d41;
    color: #e83d41;
  }
</style>
