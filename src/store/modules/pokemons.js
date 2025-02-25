import { getPokemons } from '../../api/pokemons'

export default {
    namespaced: true,
    state: {
        pokemons: [],
        searchTerm: '',
        loading: false,
    },
    getters: {
        pokemons: state => state.pokemons,

        filteredPokemons(state) {
            return state.pokemons.filter(pokemon => 
                state.searchTerm !== '' 
                    ? pokemon.name.toLowerCase().includes(state.searchTerm.toLowerCase())
                    : pokemon
            );
        },

        filteredFavoritePokemons(state) {
            return state.pokemons
                .filter(pokemon => pokemon.isFavorite)
                .filter(pokemon => 
                    state.searchTerm !== '' 
                        ? pokemon.name.toLowerCase().includes(state.searchTerm.toLowerCase())
                        : pokemon
                );
        },
    },
    mutations: {
        SET_POKEMONS(state, payload){
            state.pokemons = payload;
        },

        SET_SEARCH_TERM(state, term) {
            state.searchTerm = term;
        },

        SET_LOADING(state, isLoading) {
            state.loading = isLoading;
          },
        
    },
    actions: {
        async allPokemons({ commit }) {
            commit('SET_LOADING', true);
            try {
                let response  = await getPokemons();
                const pokemons = response.data.results.map(pokemon => ({
                    ...pokemon,
                    isFavorite: false
                }));
                commit('SET_POKEMONS', pokemons);
            } catch (error) {
                console.log(error.message);
            }finally {
                setTimeout(() => {
                    commit('SET_LOADING', false);
                }, 3200);
            }
        },

        favoritePokemon({ commit, state }, pokemon) {
            const pokemonByName = state.pokemons.find(p => p.name === pokemon.name);
            pokemonByName.isFavorite = !pokemonByName.isFavorite;
            commit('SET_POKEMONS', [...state.pokemons]);
        }
    }
}
