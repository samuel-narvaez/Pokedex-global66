<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStore()

const goToList = async () => {
  await Promise.all([
    router.push({ path: 'home' }),
    store.dispatch('PokemonModule/allPokemons')
  ])
}

</script>


<template>
  <div class="flex justify-center items-center min-h-screen px-10 py-5 text-center">
    <div class="max-w-screen-md w-full">
      <img src="/img/logoWelcome.png" class="block mx-auto w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] max-w-[300px] h-auto" alt="Vlogo" />
      <h1 class="text-[26px] leading-[31.2px] font-bold font-[Lato] mt-16">Welcome to Pokédex</h1>
      <p class="leading-[27px] mt-7 mb-9 text-[18px] font-[Lato] text-[#5E5E5E] font-medium">
        The digital encyclopedia created by Professor Oak is an invaluable tool <br> to Trainers in the Pokémon world.
      </p>
      <button type="button" @click="goToList" class="bg-[#F22539] font-[Lato] rounded-full px-[20px] py-[11px] text-white" >Get started</button>
    </div>
  </div>
   
</template>

