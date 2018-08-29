<template>
    <div>
        <p>这里是 /product/list.html</p>

        <hr/>
        <h3>调用组件示例：</h3>
        <v-dialog/>

        <hr/>
        <h3>调用接口示例：</h3>
        <button @click="getData">调用API接口</button>

        <hr/>
        <p><a href="/">首页 (多页跳转)</a></p>
        <p><router-link to="/my">个人中心 (单页跳转)</router-link></p>
        <p><router-link to="/product/detail">产品详情 (单页跳转)</router-link></p>

    </div>
</template>

<script>

  import api from '@/api'
  import vDialog from '@/components/dialog/dialog'



  export default {
    data(){
        return {

        }
    },
    components:{vDialog},
    methods:{
        getData(){
            api.user.login({
                aid:123321,
                pid: 5555555
            }).then((res)=>{
                console.log(res)
            })
        }
    }

  }

</script>

<style>
  .product-list{
    font-size:300px;
  }
</style>
