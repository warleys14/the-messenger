import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dialogVisible: false
    },

    mutations:{
        changeDialogVisibility(state){
            state.dialogVisible = !state.dialogVisible;
        }
    }
})