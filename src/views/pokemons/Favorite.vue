<script setup>
import List from '../../components/pokemons/List.vue'
import SearchPokemon from '../../components/pokemons/Search.vue'

</script>

<template>
    <div class="mx-auto min-h-[89vh] lg:min-h-[90vh] 2xl:min-h-[94vh] px-10 py-10 text-center shadow-2xl">
        <div class="flex flex-col items-center">
            <SearchPokemon  />
            <List :showFavorites=true />
        </div>
    </div>
</template>