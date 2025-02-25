import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';

import PokemonModule from './modules/pokemons';
import MenuModule from './modules/menu';

const store = createStore({
    state: {

    },
    plugins: [createPersistedState()],
    actions:{
        
    },
    mutations: {
        
    },
    getters: {

    },
    modules:{
        PokemonModule,
        MenuModule
    }
})

export default store;