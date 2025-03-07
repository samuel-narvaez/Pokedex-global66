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
    <div class="min-h-[50vh] max-h-[70vh] hidden-scroll">
        <div v-if="isLoading" class="mt-4">
            <Loading />
        </div>
        <div v-else-if="pokemons.length > 0">
            <ul class="space-y-2 mt-10 w-[20rem] lg:w-[35rem]">
                <li v-for="pokemon in pokemons" :key="pokemon.name"
                    class="flex justify-between items-center bg-gray-100 p-3 rounded-lg content-block">
                    <span @click="showDetails(pokemon)" class="font-[Lato]">{{ pokemon.name }}</span>
                    <button type="button" @click="stateFavorite(pokemon)">
                        <i class="fa-solid fa-star" :class="{ 'favorite-glow': pokemon.isFavorite }"
                            :style="{ color: pokemon.isFavorite ? '#ECA539' : '#BFBFBF' }">
                        </i>
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
.hidden-scroll {
    min-height: 50vh;
    max-height: 70vh;
    overflow-y: auto;
    scrollbar-width: none;
}

.hidden-scroll::-webkit-scrollbar {
    display: none;
}

@keyframes appear {
    from {
        opacity: 0;
        scale: 0.5;
    }

    to {
        opacity: 1;
        scale: 1
    }
}

.content-block {
    animation: appear linear;
    animation-timeline: view();
    animation-range: entry 0%;
}

@keyframes glow {
    0% {
        text-shadow: 0 0 5px #ECA539, 0 0 10px #ECA539;
    }

    50% {
        text-shadow: 0 0 10px #FFD700, 0 0 20px #FFD700;
    }

    100% {
        text-shadow: 0 0 5px #ECA539, 0 0 10px #ECA539;
    }
}

@keyframes sparkle {

    0%,
    100% {
        transform: scale(1);
        opacity: 1;
    }

    50% {
        transform: scale(1.3);
        opacity: 0.8;
    }
}

.favorite-glow {
    animation: glow 0.8s ease-in-out infinite alternate;
    position: relative;
}

.favorite-glow::after {
    content: "✨";
    position: absolute;
    top: -10px;
    right: -10px;
    font-size: 14px;
    opacity: 0;
    animation: sparkle 0.5s ease-out;
}
</style>