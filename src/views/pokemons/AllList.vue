<script setup>
import List from '../../components/pokemons/List.vue'
import Menu from '../../components/menu/Menu.vue'
import SearchPokemon from '../../components/pokemons/Search.vue'

</script>

<template>
    <div class="mx-auto min-h-[92vh] lg:min-h-[92vh] 2xl:min-h-[92vh] px-10 py-10 text-center shadow-2xl">
        <div class="flex flex-col items-center">
            <SearchPokemon />
            <List :showFavorites=false />
        </div>
    </div>
</template>