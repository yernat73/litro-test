import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})