<script setup>
import { useStore } from 'vuex'
import { onMounted, computed, ref, defineProps } from 'vue'
import { getPokemonByName } from '../../api/pokemons'

import NotFoundSearch from './NotFoundSearch.vue'
import Loading from '../Loading.vue'
import DetailsPokemon from './DetailsPokemon.vue'

const props = defineProps({
    showFavorites: Boolean
})

const store = useStore()

const isLoading = computed(() => store.state.PokemonModule.loading);
const showModal = ref(false)
const pokemon = ref([])

const pokemons = computed(() => {
    return !props.showFavorites
        ? store.getters["PokemonModule/filteredPokemons"]
        : store.getters["PokemonModule/filteredFavoritePokemons"]
})

const stateFavorite = async (pokemon) => {
    await store.dispatch('PokemonModule/favoritePokemon', pokemon)
}

const showDetails = async (infoPokemon) => {
    const response = await getPokemonByName(infoPokemon.name);
    const { name, height, weight, types, id } = response.data
    pokemon.value = { name, height, weight, types, favorite: infoPokemon.isFavorite, id }
    showModal.value = true
}

const closeModal = () => {
    showModal.value = false
}


</script>

<template>
    <div class="min-h-[50vh] max-h-[70vh] ocultar-scroll">
        <div v-if="isLoading" class="text-gray-500 font-semibold mt-4">
            <Loading />
        </div>
        <div  v-else-if="pokemons.length > 0">
            <ul class="space-y-2 mt-10 w-[20rem] lg:w-[35rem]">
                <li v-for="pokemon in pokemons" :key="pokemon.name" @click="showDetails(pokemon)"
                    class="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
                    <span class="font-[Lato]">{{ pokemon.name }}</span>
                    <button type="button" @click="stateFavorite(pokemon)">
                        <i class="fa-solid fa-star" :style="{ color: pokemon.isFavorite ? '#ECA539' : '#BFBFBF' }"></i>
                    </button>
                </li>
            </ul>
        </div>
        <div v-else class="flex justify-center items-center h-[50vh]">
            <NotFoundSearch />
        </div>

        <div v-if="showModal" class="fixed inset-0 bg-black/50 flex items-center justify-center"
            @click.self="showModal = false">
            <div class="bg-white rounded-lg  max-w-lg w-96">
                <DetailsPokemon :pokemon="pokemon" @click="closeModal()" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.ocultar-scroll {
    min-height: 50vh;
    max-height: 70vh;
    overflow-y: auto;
    scrollbar-width: none;
}

.ocultar-scroll::-webkit-scrollbar {
    display: none; 
}
</style>