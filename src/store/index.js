import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    count: 0,
    todos: [
        {id: 1, done: false},
        {id: 2, done: false},
        {id: 3, done: true}
    ]
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    strict: process.env.NODE_ENV !== 'production'
})
