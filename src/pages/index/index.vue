<template>
    <div>
        <p>这里是 /pages/index/index.vue</p>
        <hr/>
        <h3>模板中加载图片示例：</h3>
        <img src="@/assets/img/aa.png" width="80" />

        <hr/>
        <h3>代码中加载图片示例：</h3>
        <div class="item" v-for="(item, index) in list">
          <a :href="item.link"><img :src="item.img" width="50" /></a>
        </div>

        <hr/>
        <router-link to="/my">个人中心 (单页跳转)</router-link> <br/>
        <a href="/product/list.html">产品列表 (多页跳转)</a>
    </div>
</template>

<script>

  import utils from '@/utils'

  export default {
    data(){
      return {
          list:[
            {link: "111", img: require('@/assets/img/aa.png') },
            {link: "555", img: require('@/assets/img/bb.png') },
          ]
      }
    }
  }

</script>
