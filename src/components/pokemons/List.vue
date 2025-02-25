<script setup>
import { useStore } from 'vuex'
import { onMounted, computed, ref, defineProps } from 'vue'

import NotFoundSearch from './NotFoundSearch.vue'
import Loading from '../Loading.vue'

const props = defineProps({
    showFavorites: Boolean
})

const store = useStore()

const isLoading = computed(() => store.state.PokemonModule.loading);

const pokemons = computed(() => {
    return !props.showFavorites
        ? store.getters["PokemonModule/filteredPokemons"]
        : store.getters["PokemonModule/filteredFavoritePokemons"]
})

const stateFavorite = async (pokemon) => {
    await store.dispatch('PokemonModule/favoritePokemon', pokemon)
}


</script>

<template>
    <div class="min-h-[50vh] max-h-[70vh] overflow-y-auto">
        <div v-if="isLoading" class="text-gray-500 font-semibold mt-4">
            <Loading />
        </div>
        <div v-else-if="pokemons.length > 0">
            <ul class="space-y-2 mt-10 w-[20rem] lg:w-[35rem]">
                <li v-for="pokemon in pokemons" :key="pokemon.name" class="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
                    <span>{{ pokemon.name }}</span>
                    <button type="button" @click="stateFavorite(pokemon)">
                        <i class="fa-solid fa-star" :style="{ color: pokemon.isFavorite ? '#ECA539' : '#BFBFBF' }"></i>
                    </button>
                </li>
            </ul>
        </div>
        <div v-else class="flex justify-center items-center h-[50vh]">
            <NotFoundSearch />
        </div>
    </div>
</template>