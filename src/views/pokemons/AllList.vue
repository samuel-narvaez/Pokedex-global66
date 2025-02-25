<script setup>
import List from '../../components/pokemons/List.vue'
import Menu from '../../components/menu/Menu.vue'
</script>

<template>
    <div class="mx-auto min-h-[89vh] px-10  py-10 text-center shadow-2xl">
        <div class="flex flex-col items-center">
            <div class="flex items-center border w-[20rem] lg:w-[35rem] focus-within:border-indigo-500 transition duration-300 pr-3 gap-2 bg-white border-gray-500/30 h-[46px] rounded-[5px] overflow-hidden">
                <i class="fa-solid fa-magnifying-glass fa-sm pl-4" style="color: #BFBFBF;"></i>
                <input type="text" placeholder="Search" class="w-full h-full rounded-sm drop-shadow-sm outline-none placeholder-gray-500 text-sm" />
            </div>
            <List />
        </div>
    </div>
    <Menu />
</template>