import Vue from 'vue';
import Vuex from 'vuex';
import empty from './modules/empty';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        empty,
    },
});
