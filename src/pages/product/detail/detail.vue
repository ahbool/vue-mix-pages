<template>
    <div id="app">
        <h3>{{msg}}</h3>
        <p>点击: {{ $store.state.count }} 次, {{ evenOrOdd }}</p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">odd</button>
        <button @click="incrementAsync">异步+</button>


        <hr/>


        <div>
            <button @click="addTodo2">修改Todo & 调用接口</button>
            <span>已完成：{{ doneTodosCount }}</span>
        </div>

        <hr/>
        <div>
            <p><a href="/">首页 (多页跳转)</a></p>
            <router-link to="/my">个人中心 (单页跳转)</router-link>
            <p>
              <router-link to="/product/list.html">产品列表 (单页跳转)</router-link> |
              <a href="/product/list.html">产品列表 (多页跳转)</a>
            </p>
        </div>

    </div>
</template>

<script>
    import * as api from '@/api'
    import { mapState, mapGetters, mapActions } from 'vuex'

    export default {
        data() {
            return {
              msg: "一个 Vuex 的测试例子..."
            }
        },
        computed: {
            ...mapGetters([
                'evenOrOdd',
                'doneTodos',
                'doneTodosCount'
            ])
        },
        methods:{
            addTodo2(){
                this.addTodo({id: 8, done: true})

                console.log(this.$store.state.todos)
                console.log(this.evenOrOdd)
            },
            ...mapActions([
                'addTodo',
                'increment',
                'decrement',
                'incrementIfOdd',
                'incrementAsync'
            ])
        }
    }
</script>

<style>
    #product-detail {
        color: #f00;
    }
</style>
