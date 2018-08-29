<template>
    <div class="my">
        <p>这里是 /pages/my/index/index.vue</p>
        <p><a href="/">首页 (多页跳转)</a></p>
        <p><a href="/product/list.html">产品列表 (多页跳转)</a></p>
    </div>
</template>

<script>

import '@/assets/style/common.css'

  export default {
    data(){
      return {

      }
    }
  }

</script>

<style>
  .my{
      font-weight: 700;
  }
  .my-example {
    display: grid;
    transition: all .5s;
    user-select: none;
    background: linear-gradient(to bottom, white, black);
}

</style>
