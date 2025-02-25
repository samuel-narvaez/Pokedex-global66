<script setup>
import { useStore } from 'vuex';
import { ref, watch } from 'vue';

const store = useStore();
const text = ref(""); 

watch(text, (pokemon) => {
    store.commit('PokemonModule/SET_SEARCH_TERM', pokemon);
});

</script>


<template>
    <div
        class="flex items-center border w-[20rem] lg:w-[35rem] focus-within:border-indigo-500 transition duration-300 pr-3 gap-2 bg-white border-gray-500/30 h-[46px] rounded-[5px] overflow-hidden">
        <i class="fa-solid fa-magnifying-glass fa-sm pl-4" style="color: #BFBFBF;"></i>
        <input 
            class="w-full h-full rounded-sm drop-shadow-sm outline-none placeholder-gray-500 text-sm" 
            type="text" 
            placeholder="Search" 
            v-model="text"
        />
    </div>
</template>