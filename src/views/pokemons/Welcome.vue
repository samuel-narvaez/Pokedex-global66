<script setup>

import { useRouter } from 'vue-router'
const router = useRouter()

const goToList = () => {
  router.push({ path: 'all-list' })
}

</script>


<template>
  <div class="flex justify-center items-center min-h-screen px-10 py-5 text-center">
    <div class="max-w-screen-md w-full">
      <img src="/img/logoWelcome.png" class="block mx-auto w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] max-w-[300px] h-auto" alt="Vlogo" />
      <h1 class="text-[26px] leading-[31.2px] font-bold mt-16">Welcome to Pokédex</h1>
      <p class="leading-[27px] mt-7 mb-9 text-[18px] text-[#5E5E5E] font-medium">
        The digital encyclopedia created by Professor Oak is an invaluable tool <br> to Trainers in the Pokémon world.
      </p>
      <button type="button" @click="goToList" class="bg-[#F22539] rounded-full px-[20px] py-[11px] text-white" >Get started</button>
    </div>
  </div>
   
</template>

