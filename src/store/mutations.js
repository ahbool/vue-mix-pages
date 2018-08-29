import * as types from './mutation-types'

export default {
    //加
    [types.INCREMENT](state){
        state.count++
    },

    //减
    [types.DECREMENT](state){
        state.count--
    },

    //添加todo
    [types.ADD_TODO](state, data){
        state.todos.push(data)
    }
}
